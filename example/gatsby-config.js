module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embedder',
            options: {
              customTransformers: [
                require('../') // require('excalidraw-embed')
              ]
            }
          }
        ]
      }
    }
  ]
};
