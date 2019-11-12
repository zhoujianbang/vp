module.exports = {
    title: 'crm前端团队文档中心',
    description: '老年人~',
    repo: 'https://github.com/zhoujianbang/vp.git',
    base: '/test/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.ico'
        }]
    ],
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '飞书', link: 'https://meicai.feishu.cn/space/folder/fldcnwElAqI8rlNwxURCOhs68ch' },
        ],
        sidebar: [
             ['/', '简介'], 
             {
                 title: "基础组件",
                 collapsable: false,
                 children: [
                     ['/crm_component/navigation-bar.md', '导航条'],
                     ['/crm_component/tabs.md', '标签栏'],
                 ]
             }
        ]
      }
}