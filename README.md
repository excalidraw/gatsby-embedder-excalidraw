# Embedded Excalidraw diagrams

This custom transformer for `gatsby-remark-embedder` allows you to embed Excalidraw diagrams by creating a link in Markdown.

The code for this library is lifted from [this file](https://github.com/excalidraw/excalidraw-blog/blob/master/src/excalidraw-embed/index.js) in the [`excalidraw-blog`](https://github.com/excalidraw/excalidraw-blog) Gatsby site. I was inspired to do this when I saw [Alex Luong's tweet](https://twitter.com/alex__luong/status/1257909443112497153) about making this functionality into a `gatsby-remark-excalidraw` plugin.

## Installation

```bash
npm install excalidraw-embed
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embedder',
            options: {
              customTransformers: [require('excalidraw-embed')]
            }
          }
        ]
      }
    }
  ]
};
```

## License

[MIT](./LICENSE)
