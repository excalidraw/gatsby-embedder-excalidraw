# Embedded Excalidraw diagrams

This custom transformer for [`gatsby-remark-embedder`](https://github.com/MichaelDeBoey/gatsby-remark-embedder) allows you to embed Excalidraw diagrams in Markdown content simply by pasting an Excalidraw link in the source.

The code for this library is lifted from [this file](https://github.com/excalidraw/excalidraw-blog/blob/master/src/excalidraw-embed/index.js) in the [`excalidraw-blog`](https://github.com/excalidraw/excalidraw-blog) Gatsby site. All credit for this transformer goes to those authors. I was inspired to do this when I saw [Alex Luong's tweet](https://twitter.com/alex__luong/status/1257909443112497153) about making this functionality into a `gatsby-remark-excalidraw` plugin.

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [License](#license)

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

## Example

This guide will show you how to get up and running with `excalidraw-embed` in the fewest steps possible. It uses `gatsby-plugin-mdx` to take advantage of its awesome default behaviour of automatically creating pages based on MDX files in `src/pages`.

First, install `gatsby` and its dependencies:

```bash
npm install gatsby react react-dom
```

Next, install `gatsby-plugin-mdx` and its dependencies:

```bash
npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
```

Add `gatsby-plugin-mdx` to your Gatsby config:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx'
    }
  ]
};
```

Install the `gatsby-remark-embedder` plugin and this Excalidraw transformer `excalidraw-embed`:

```bash
npm install gatsby-remark-embedder excalidraw-embed
```

Add `gatsby-remark-embedder` as a Gatsby remark plugin for `gatsby-plugin-mdx`. In your `gatsby-remark-embedder` options, add `excalidraw-embed` as a custom transformer:

```diff
// gatsby-config.js
module.exports = {
  plugins: [
    {
-     resolve: 'gatsby-plugin-mdx'
+     resolve: 'gatsby-plugin-mdx',
+     options: {
+       gatsbyRemarkPlugins: [
+         {
+           resolve: 'gatsby-remark-embedder',
+           options: {
+             customTransformers: [require('excalidraw-embed')]
+           }
+         }
+       ]
+     }
    }
  ]
};
```

Create an MDX page at `src/pages/index.mdx` and add a link to an Excalidraw diagram:

```markdown
# Fox grab flowchart

Fox's followups after a grab depend on your opponent's DI:

https://excalidraw.com/#json=5695519967936512,sLhjTgn1_wB1iVLLquX6Fg
```

Voila! 🎉 https://excalidraw-embed.trevorblades.com

## License

[MIT](./LICENSE)
