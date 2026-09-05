export function cmsAssetToPublicUrl(pathValue) {
  if (!pathValue || typeof pathValue !== 'string') {
    return '';
  }

  const normalizedPath = pathValue.replace(/\\/g, '/');
  let publicUrl = normalizedPath;

  if (normalizedPath.startsWith('../media/')) {
    publicUrl = `/media/${normalizedPath.replace('../media/', '')}`;
  }

  if (normalizedPath.startsWith('/content/media/')) {
    publicUrl = normalizedPath.replace('/content/media/', '/media/');
  }

  return encodeURI(publicUrl);
}

export function normalizeHtmlAssetUrls(html) {
  if (!html || typeof html !== 'string') {
    return '';
  }

  return html.replace(/\b(src|href)=(["'])([^"']+)\2/gi, (match, attribute, quote, rawUrl) => {
    const normalizedUrl = rawUrl.replace(/\\/g, '/');
    let publicUrl = '';

    if (normalizedUrl.startsWith('../media/')) {
      publicUrl = cmsAssetToPublicUrl(normalizedUrl);
    } else if (normalizedUrl.startsWith('./media/')) {
      publicUrl = cmsAssetToPublicUrl(normalizedUrl.replace('./media/', '../media/'));
    } else if (normalizedUrl.startsWith('/content/media/')) {
      publicUrl = cmsAssetToPublicUrl(normalizedUrl);
    } else if (normalizedUrl.startsWith('media/')) {
      publicUrl = encodeURI(`/${normalizedUrl}`);
    }

    if (!publicUrl) {
      return match;
    }

    return `${attribute}=${quote}${publicUrl}${quote}`;
  });
}
