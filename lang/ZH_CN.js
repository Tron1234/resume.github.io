export const selfAssessment_title = "自我总结"
export const introduce = `我叫王卓华，25岁，目前就职岗位是前端开发工程师，使用的技术栈是vue、uniapp框架、微信小程序，主要从事移动端H5、微信公众号、混合App客户端的开发工作。善于处理web自适应问题、Ios、Android浏览器和App的兼容性问题，以及微信公众号JSSDK调用问题`
export const selfAssessment = `从事这个行业已经有3年的时间了，在3年中做过独立开发多端项目、大部分服务端项目，有了一定的技术沉淀，也发现自身的一些技术问题，从会用到“下潜”深究原理。可能很多人认为前端开发没有技术难度，因为业务代码基本在后端，但对我一个从科班学后端最后走向前端的人来说，前端的魅力在于可以及时看到华丽的样式和动画效果，相比于无聊的大量数据，这才是我期待的`
export const sendGift = `送你一个礼物，请向下划动打开`
export const peroration = `谢谢您的阅览，祝您每天幸福！`

export const chapters = [{
  title: '基本信息',
  selfInfo: [{
    title: '姓名',
    value: '王卓华'
  }, {
    title: '工作经验',
    value: '3年'
  }, {
    title: '出生年月',
    value: '1997.11'
  }, {
    title: '意向城市',
    value: '广东省深圳市'
  }, {
    title: '电话',
    value: '15079292840'
  }, {
    title: '邮箱',
    value: '506980247@qq.com'
  }, {
    title: '社交主页',
    value: 'https://github.com/Tron1234'
  }, {
    title: '个人博客',
    value: 'http://81.71.149.135'
  }]
}, {
  title: '工作经历',
  list: [{
    time: '2022.10 - 2023.02',
    company: '深圳东方大唐信息技术有限公司',
    jobName: 'Web前端工程师',
    jobContent: ['维护EHR管理系统社保公积金模块的新需求和bug修复', '编写EHR管理系统级联组件并内嵌至编写的列表筛选组件、table表格动态筛选列组件', '基于uniapp开发《学玩》App，并上架各大应用商店']
  }, {
    time: '2021.07 - 2022.09',
    company: '视昀科技（深圳）有限公司',
    jobName: 'Web前端工程师',
    jobContent: ['维护和迭代智慧工地web端、App端、微信小程序端项目', '独立开发物联网IOT平台', '根据前端规范架构和UI设计稿实现前端项目整体架构和组件库', '制作POC智慧巡防系统', '开发海军职业英语口译AI评测系统']
  }, {
    time: '2020.03 - 2021.06',
    company: '深圳市优区生活网络科技有限公司',
    jobName: '前端技术开发人员',
    jobContent: ['基于uniapp前端框架开发H5、微信公众号、App等', '对多平台多系统版本进行兼容性适配', '与后端开发人员对接api接口']
  }]
}, {
  skillsIntro: '技能介绍',
  commonSkills: '常用技术',
  skills: ['Vue', 'uni-app', '微信小程序', 'tailwindCSS', 'Nodejs', 'JQuery', 'Java', 'Mysql'],
  skillsArticle: ['熟练掌握Vue前端框架，利用vue-cli脚手架创建项目、vue-router控制业务逻辑的跳转、vuex对全局变量控制、axios进行网络数据请求，了解Vue底层源码如数据劫持、模版渲染等', '熟练掌握基于Vue的uni-app前端框架，熟悉文档中api的基本调用，了解uniapp底层实现代码，善于处理多平台以及IOS和Android App系统版本的兼容性问题、原生组件的云导入和离线导入、H5兼容公众号（JSSDK）等处理方案，熟练掌握H5、App云打包以及离线打包方式', '熟悉微信小程序开发流程，掌握微信支付、微信通知、微信登录、微信分享等基于小程序的api处理方案', '掌握前端基础知识HTML5、CSS3、JavaScript(ES6)、jQuery、Ajax等，善于处理移动端适配兼容问题', '了解浏览器基本原理、图层渲染、内存空间分配、垃圾回收等', '了解前端新潮技术，例如vue3、tailwind css、nuxt(spa服务端渲染框架)、Typescript、ChatGPT等', '了解Java SE、koa（nodejs）编写的后台接口代码、编写基本的MySql查询语句', '了解linux基本操作、Web项目的基本部署', '掌握PhotoShop、illustrator前端UI制作工具、绘制svg图标等']
}, {
  title: '项目经验（客户端）',
  projectDesc: '项目描述',
  responsibilityDesc: '责任描述',
  keyPoints: '技术要点',
  list: [{
    icon: './static/img/uarea.png',
    name: '优区生活',
    projectDesc: '优区生活(英文: U-Area)主要负责国内以及部分海外市场的房屋租赁业务。专注于个人房屋租赁交易服务。主要提供创新的即时求租平台，利用人工智能对租客和房东进行实时匹配',
    responsibilityDesc: '根据原项目U-Area Web网站，独立开发出基于uni-app框架APP、H5、公众号等多平台项目用于迭代原有项目',
    keyPoints: ['通过阅读uni-app框架源码，修改HbuilderX编辑器中本地的SDK源码实现部分框架未实现的功能', '将第三方开发的原生插件引入Android studio，通过uni-app离线打包的方式进行打包', '通过uni-app封装的websocket实现IM功能，如：用户与用户、用户与客服、系统消息、应用内推送等消息通知', '解决在H5端的聊天页面中输入框多次被键盘遮挡的问题，并且根据微信的用户习惯的聊天操作逻辑对IOS和Android端分别处理，IOS端表情使用”[表情]”表示，Android端则是图片，等类似设计', '编写用户圆形头像伪随机算法，并使用canvas绘制用户雷达页面，伴随着陆续弹出头像的动画效果', '兼容微信公众号平台部分功能，通过调用JSSDK库实现例如上传图片，发送语音等功能', '实现App、H5、微信公众号平台的微信支付和支付宝（微信公众号不支持）支付功能', '制作android端启动页.9图，编写ios端storyboard启动页，并上架各大应用商店']
  }, {
    icon: './static/img/xuewan.png',
    name: '学玩App',
    projectDesc: '学玩，是一款帮助你开始科学高效学习的App',
    responsibilityDesc: '与研发团队一起开发App项目并发布上线',
    keyPoints: ['基于uni-app框架开发App端', '编写Sqlite增删改查功能并封装成函数方便调用，并用于存储用户学习数据并与后端数据库做定时同步', '通过读取本地Sqlite获取用户当前需要复习的词卡', '根据算法模型编写用户复习逻辑和学习逻辑']
  }]
}, {
  title: '项目经验（服务端）',
  projectDesc: '项目描述',
  responsibilityDesc: '责任描述',
  keyPoints: '技术要点',
  list: [{
    name: 'EHR管理系统',
    projectDesc: '该系统用于公司内部招聘员工管理，社保公积金、入职、离职等信息',
    responsibilityDesc: '优化该项目web端，并实现新需求',
    keyPoints: ['编写级联组件兼容tree、select下拉选择框支持多选，目前实现两种模式，第一种通过设置v-model为tree的叶子结点code（唯一值）可自动回显选中所有节点；第二种通过设置v-model为选中的tree结构可自动回显选中所有父节点，根据节点code是否存在相同分别调用', '编写列表筛选条件配置组件，包含输入框、复选框、选择器等常用组件，实现通过编写json配置项实现列表筛选功能，并加入vuedraggable对筛选条件进行排序和勾选使用']
  }, {
    name: 'POC融合通讯',
    projectDesc: '该系统是为保安、警察等群体所开发的一套智慧巡防系统，主要用于智能设备呼叫，群呼等功能',
    responsibilityDesc: '搭建公司前端UI架构和组件库并用于该项目，引入离线地图功能并实现地图库的常用api，使用自己封装的组件库搭建项目管理端',
    keyPoints: ['基于Vue+elementUI框架、Vuex状态管理、Vue-router路由', '基于elementUI封装符合公司前端规范的项目架构', '独立制作web端IM界面，通过调用openIM api与后端通过websocket进行通信', '由于项目是VPN内网使用必须使用离线地图，因此研究百度地图的离线引入方式，并使用Python爬取百度地图poi数据，用于位置搜索和逆地址解析']
  }, {
    name: '海军职业英语口译AI评测系统',
    projectDesc: '该系统是为职院英语考试所开发，主要有学员、教师、管理员角色，根据不同的角色实现不同的功能，例如管理学员、管理试题、添加考试、学员在线考试等',
    responsibilityDesc: '搭建项目整体框架为同事分配指定功能页面，实现根据角色登录、不同角色主页面的开发、在线考试、全局音频播放组件封装、编写测试文档，并对部分页面实现自适应等功能',
    keyPoints: ['基于Vue+elementUI框架、Vuex状态管理、Vue-router路由（根据角色动态添加路由）', '封装全局audio组件用于学员录音播放、考试试题音频播放，全局同时只能播放一个音频，针对移动端做了音频息屏时自动停止的功能', '基于muaz-khan/RecordRTC和xiangyuecn/Recorder添加未实现的功能合并打包成项目所需要的npm包并发布，在项目中引用并封装成h5录音组件', '由于录音组件需要在https协议下才能正常录音，因此利用nginx服务器反向代理和host开发调试该项目']
  }]
}]