module.exports = {
  title: 'RealHeng',
  description: "RealHeng's blog",
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/'
          }
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api']
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
    logo: 'https://gitee.com/leoyzh/imgbed/raw/master/img/20210926104301.jpg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'RealHeng',
    authorAvatar:
      'https://gitee.com/leoyzh/imgbed/raw/master/img/20210926104301.jpg',
    startYear: '2021'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    // 自动生成侧边栏
    'vuepress-plugin-auto-sidebar': {
      titleMap: {}
    },
    // 鼠标点击特效
    'cursor-effects': {
      size: 2, // size of the particle, default: 2
      shape: 'star', // shape of the particle, default: 'star', 'star' | 'circle'
      zIndex: 999999999 // z-index property of the canvas, default: 999999999
    },
    // 音乐播放器设置
    meting: {
      meting: {
        auto: 'https://music.163.com/#/song?id=4885285',
        server: 'netease',
        type: 'song',
        mid: '4885285'
      },
      aplayer: {
        order: 'list',
        lrcType: 0,
        volume: 0.15,
        mini: true,
        autoplay: true
      }
    },
    // 修复中文命名
    'permalink-pinyin': {
      lowercase: true, // Converted into lowercase, default: true
      separator: '-' // Separator of the slug, default: '-'
    },
    // live2d 插件配置
    'vuepress-plugin-helper-live2d': {
      // 是否开启控制台日志打印(default: false)
      log: true,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: koharu)
        model: 'tororo',
        display: {
          vOffset: -55 //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  }
}
