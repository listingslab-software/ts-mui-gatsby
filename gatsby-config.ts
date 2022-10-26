// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TypeScript Material UI Gatsby`,
    siteUrl: `https://listingslab.com`
  },
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_SPACE_ID,
      "spaceId": process.env.CONTENTFUL_ACCESS_TOKEN,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
