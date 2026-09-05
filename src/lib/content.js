import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { load } from 'js-yaml';
import matter from 'gray-matter';
import { marked } from 'marked';
import { cmsAssetToPublicUrl, normalizeHtmlAssetUrls } from './cms-paths';

const PAGES_DIR = path.join(process.cwd(), 'content', 'pages');
const SETTINGS_DIR = path.join(process.cwd(), 'content', 'settings');

async function readYamlFrom(baseDir, filename) {
  const filePath = path.join(baseDir, filename);
  const fileText = await readFile(filePath, 'utf-8');
  return load(fileText);
}

async function readMarkdownFile(filePath) {
  const fileText = await readFile(filePath, 'utf-8');
  const { data, content } = matter(fileText);
  const bodyHtml = normalizeHtmlAssetUrls(await marked.parse(content));
  return {
    ...data,
    meta: {
      ...data.meta,
      image: cmsAssetToPublicUrl(data.meta?.image),
    },
    header: {
      ...data.header,
      image: cmsAssetToPublicUrl(data.header?.image),
    },
    image: cmsAssetToPublicUrl(data.image),
    body: content,
    bodyHtml,
  };
}

export async function getHomePage() {
  return readYamlFrom(PAGES_DIR, 'home.yml');
}

export async function getGlobalSettings() {
  return readYamlFrom(SETTINGS_DIR, 'global.yml');
}

export async function getNavigationSettings() {
  return readYamlFrom(SETTINGS_DIR, 'navigation.yml');
}

export async function getPageContentBySlug(slug) {
  const markdownPath = path.join(PAGES_DIR, `${slug}.md`);
  const yamlPath = path.join(PAGES_DIR, `${slug}.yml`);

  try {
    const yaml = await readYamlFrom(PAGES_DIR, `${slug}.yml`);
    return {
      ...yaml,
      meta: {
        ...yaml.meta,
        image: cmsAssetToPublicUrl(yaml.meta?.image),
      },
      header: {
        ...yaml.header,
        image: cmsAssetToPublicUrl(yaml.header?.image),
      },
      image: cmsAssetToPublicUrl(yaml.image),
    };
  } catch (yamlError) {
    try {
      return await readMarkdownFile(markdownPath);
    } catch (markdownError) {
      throw new Error(`Unable to load page content for slug: ${slug}`);
    }
  }
}

export async function getSettingContentBySlug(slug) {
  const yaml = await readYamlFrom(SETTINGS_DIR, `${slug}.yml`);
  return {
    ...yaml,
    image: cmsAssetToPublicUrl(yaml.image),
  };
}
