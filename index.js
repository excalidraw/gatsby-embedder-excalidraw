const getImage = require('./get-image');

exports.shouldTransform = url =>
  /^https?:\/\/excalidraw\.com\/#json=/.test(url);

exports.getHTML = async url => {
  const svg = await getImage(url);
  return `<a style="box-shadow: none" href="${url}">${svg.replace(
    '<svg',
    '<svg role="img" aria-label="Excalidraw drawing"'
  )}</a>`;
};
