/**
 * @type {import('~/types').BlogConfig}
 */
const BLOG = {
  title: '慢叨 Slowmur',
  author: 'Xians',
  email: 'hi@xianssu.com',
  link: 'https://slowmur.com',
  externalHPLink: 'https://xianssu.com',
  description: '有些事用說的略顯嘮叨，放著沉澱。',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'dark', // ['light', 'dark'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  profileSlug: 'profile',
  since: 2022, // If leave this empty, current year will be used.
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://vercel-og-beta.vercel.app', // The link to generate OG image, don't end with a slash
  // detail: https://github.com/yokinist/og-image/blob/main/api/_lib/types.ts#L2-L12
  socialLink: 'https://xianssu.com',
  seo: {
    keywords: ['xians', 'Xians Su', 'slowmur', '慢叨'],
    googleSiteVerification: '_1A8LqqSKVpDRvIVBJIzizKL9y5T7poSIDkc8TbS5m0', // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ackee', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: 'https://ackee.xians.su/tracker.js', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: 'https://ackee.xians.su', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: 'a531dcad-6197-4326-9abe-3f2d2d35b463' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '', // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      clientID: '',
      clientSecret: process.env.GITALK_CLIENT_SECRET,
      admin: [''],
      id: '', // Ensure uniqueness and length less than 50
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: '',
    },
    cusdisConfig: {
      appId: '', // data-app-id'
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
