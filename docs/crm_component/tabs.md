---
category: Components
type: Navigation
title: ScrollTab
subtitle: 标签页
---

用于让用户在不同的视图中进行切换。

### ScrollTab

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs | tab数据 | TabData[] |  | true
visibleTabsCount | 显示在屏幕中的标签数量 默认3个 取tabs长度和visibleTabsCount的最小值 | number |  | false
tabScrollEnable | tabs标签scrollview是否能滚动, 不设置会默认根据内容是否超出标签的scrollview容器来判断 | boolean |  | false
tabBarPosition  | TabBar位置 | 'top' \| 'bottom' |  top | false
renderTabBar  | 替换TabBar | ((props: TabBarPropsType) => React.ReactNode) \| false |  | false
initialPage  | 初始化Tab, index or key | number \| string |  | false
page  | 当前Tab, index or key | number \| string |  | false
swipeable  | 是否可以滑动内容切换 | boolean |  true | false
useOnPan  | 使用跟手滚动 | boolean |  true | false
prerenderingSiblingsNumber  | 预加载两侧Tab数量 | number |  1 | false
animated  | 是否开启切换动画 | boolean |  true | false
onChange  | tab变化时触发 | (tab:  TabData, index: number) => void |  | false
onTabClick  | tab 被点击的回调 | (tab:  TabData, index: number) => void |  | false
destroyInactiveTab | 销毁超出范围Tab | boolean |  false | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number |  0.3 | false
usePaged | 是否启用分页模式 | boolean |  true | false
tabBarUnderlineStyle  | tabBar下划线样式 | React.CSSProperties \| any |  | false
tabBarBackgroundColor  | tabBar背景色 | string |  | false
tabBarActiveTextColor  | tabBar激活Tab文字颜色 | string |  | false
tabBarInactiveTextColor  | tabBar非激活Tab文字颜色 | string |  | false
tabBarTextStyle  | tabBar文字样式 | React.CSSProperties \| any |  | false
renderTab | 替换TabBar的Tab | (tab:  TabData) => React.ReactNode | | false
renderUnderline | renderUnderline | (style: any) => React.ReactNode | | false


### .DefaultTabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab | 跳转Tab | (index: number) => boolean | | true
tabs|tab数据 | TabData[] | | true
activeTab | 当前激活Tab索引 | number | | true
animated | 是否使用动画 | boolean | | true
renderTab | 替换TabBar的Tab | (tab: TabData) => React.ReactNode | | false
page | Tab分页尺寸 | number | 5 | false
onTabClick  | tab 被点击的回调 | (tab: TabData, index: number) => void |  | false

### .Tabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs|tab数据 | TabData[] | | true
activeTab | 当前选中tab索引 | number | | true
visibleTabsCount | 显示在屏幕中的标签数量 默认3个 取tabs长度和visibleTabsCount的最小值 | number |  3
scrollEnable| 是否允许滚动标签 | boolean | | false
renderTab | 自定义替换Tabs的标签 | (item: TabData, index: number) => React.ReactNode | 无
onChange  | tab 被点击的回调 | (tab: TabData, index: number) => void  | 无
underlineStyle  | 指示器样式 | StyleProp |  无
seperator  | 自定义底部线条 | React.ReactNode |  无
seperatorStyle  | 底部线条样式 | StyleProp | 无
backgroundColor  | 背景色 | string |  无
activeTextColor  | 选中文字颜色 | string |  无
inactiveTextColor  | 未选中文字颜色 | string |  无
activeTextStyle  | 未选中文字样式 | StyleProp |  无
inActiveTextStyle? | 选中文字样式 | StyleProp | 无

