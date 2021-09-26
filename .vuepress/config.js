module.exports = {
  title: 'RealHeng',
  description: "是谁来自山川湖海，却囿于昼夜厨房与爱。",
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
  // subSidebar: 'auto',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text:'日常',
        icon:'reco-document',
        link:'/日常/01-2021-09.md'
      },
      {
        text:'专栏',
        icon:'reco-document',
        items:[
          {
            text:'脚手架',
            link:'/专栏/脚手架/01-scaffold.md'
          },
          {
            text:'React',
            link:'/专栏/React/01-React.md'
          }
        ]
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/realheng',
            icon: 'reco-github'
          }
        ]
      }
    ],
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      tag: {
        location: 2,
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
        auto: 'https://music.163.com/#/playlist?id=6990109713',
        server: 'netease',
        type: 'playlist',
        mid: '6990109713'
      },
      aplayer: {
        order: 'random',
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
        model: 'koharu',
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
