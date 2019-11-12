module.exports = {
    title: '文档管理',
    description: '呵呵博客',
    repo: 'https://github.com/zhoujianbang/vip.io.git',
    base: '/vp/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.ico'
        }]
    ],
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '测试', link: '/test/test.md' },
          { text: '百度', link: 'https://www.baidu.com' },
        ],
        sidebar: [
             ['/', '简介'], 
             {
                 title: "车商通",
                 collapsable: false,
                 children: [
                     ['/test/test1.md', '车商通'],
                     ['/test/test2.md', '草稿箱'],
                     ['/test/test3.md', '二手车']
                 ]
             }, {
                 title: "新框架",
                 collapsable: true,
                 children: [
                     ['/test/test4.md', '发布新框架'],
                     ['/test/test5.md', '本地开发'],
                     ['/test/test6.md', '问题反馈']
                 ]
             },

             ['/test/test7.md', '问题反馈']
        ]
      }
}