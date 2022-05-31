const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Test',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Administrator\\Desktop\\test\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Test',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Administrator\\Desktop\\test',
          templates:
            'C:\\Users\\Administrator\\Desktop\\test\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Administrator\\Desktop\\test\\.docz',
          cache: 'C:\\Users\\Administrator\\Desktop\\test\\.docz\\.cache',
          app: 'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app',
          appPackageJson:
            'C:\\Users\\Administrator\\Desktop\\test\\package.json',
          appTsConfig: 'C:\\Users\\Administrator\\Desktop\\test\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\Administrator\\Desktop\\test\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Administrator\\Desktop\\test\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\Administrator\\Desktop\\test\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\Administrator\\Desktop\\test\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app\\index.html',
          db: 'C:\\Users\\Administrator\\Desktop\\test\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
