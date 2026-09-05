import path from 'node:path';
import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import { cmsAssetToPublicUrl, normalizeHtmlAssetUrls } from './cms-paths';

const CONTENT_DIR = path.join(process.cwd(), 'content');

async function readMarkdownCollection(folderName) {
  const directoryPath = path.join(CONTENT_DIR, folderName);
  const filenames = await readdir(directoryPath);
  const markdownFiles = filenames.filter((name) => name.endsWith('.md'));

  const entries = await Promise.all(
    markdownFiles.map(async (filename) => {
      const filePath = path.join(directoryPath, filename);
      const source = await readFile(filePath, 'utf-8');
      const { data, content } = matter(source);
      const frontmatter = /** @type {Record<string, any>} */ (data);
      const slugSource = frontmatter.slug || filename.replace(/\.md$/, '');
      const html = normalizeHtmlAssetUrls(await marked.parse(content));

      return {
        ...frontmatter,
        routeSlug: String(slugSource).trim(),
        image: cmsAssetToPublicUrl(frontmatter.image),
        meta: {
          ...frontmatter.meta,
          image: cmsAssetToPublicUrl(frontmatter.meta?.image),
        },
        html,
      };
    })
  );

  return entries.sort((left, right) => {
    const leftOrder = Number(left.order || 999);
    const rightOrder = Number(right.order || 999);
    return leftOrder - rightOrder;
  });
}

export async function getIllnessEntries() {
  return /** @type {Promise<any[]>} */ (readMarkdownCollection('illness'));
}

export async function getOperationEntries() {
  return /** @type {Promise<any[]>} */ (readMarkdownCollection('operation'));
}

export async function getTherapyEntries() {
  return /** @type {Promise<any[]>} */ (readMarkdownCollection('therapy'));
}

export async function getMemberEntries() {
  return /** @type {Promise<any[]>} */ (readMarkdownCollection('member'));
}
