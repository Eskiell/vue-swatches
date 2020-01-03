module.exports = {
  title: 'Vue Swatches',
  description: 'Help the user picking beautiful colors',
  head: [['link', { rel: 'icon', href: '/assets/images/vue-logo.png' }]],
  themeConfig: {
    repo: 'saintplay/vue-swatches',
    logo: '/assets/images/vue-logo.png',
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'API', link: '/api/' },
      { text: 'Presets', link: '/presets/' },
      {
        text: 'Changelog',
        link: 'https://github.com/saintplay/vue-swatches/releases',
      },
    ],
    sidebar: 'auto',
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-include'))
    },
  },
}
