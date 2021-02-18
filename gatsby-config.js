module.exports = {
  siteMetadata: {
    title: 'The Great Gatsby Bootcamp',
    author: 'Marcelo Soares',
    description: 'Curso do Andrew Mead de Graphql',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
