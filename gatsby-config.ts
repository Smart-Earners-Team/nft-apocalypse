import type { GatsbyConfig } from "gatsby";
import * as Path from "path"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `NFT Apocalypse`,
    siteUrl: `https://www.nftx.rocks`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: Path.resolve("./src/components/GlobalAppWrapper.tsx"),
      },
    },

    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "nft-apocalypse"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/assets/icons/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "static",
        "path": "/static/"
      },
      __key: "static"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "icon",
      "path": "./src/assets/icons/"
    },
    __key: "images"
  },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
