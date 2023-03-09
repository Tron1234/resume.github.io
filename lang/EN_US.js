export const selfAssessment_title = "Self-Assessment"
export const introduce = "My name is Wang Zhuohua, 25 years old, currently working as a frontend development engineer. I use technologies such as Vue, Uniapp framework, WeChat Mini Program, and mainly engage in the development of mobile H5, WeChat public account, and hybrid App clients. I am good at handling web adaptive problems, compatibility issues with iOS/Android browsers and Apps, as well as WeChat public account JSSDK invocation issues."
export const selfAssessment = "I have been in this industry for 3 years, during which I have worked on independent development of multi-end projects and mostly service-side projects. I have gained some technical experience and also discovered some of my own technical issues, and have been diving deep into the underlying principles. Many people may think that frontend development does not have technical difficulties, as most of the business code is on the backend. However, for me, someone who has learned backend programming in college but ended up in frontend development, the charm of frontend development lies in being able to see gorgeous styles and animation effects in real-time, which is what I look forward to, compared to the boring large amount of data."
export const sendGift = "I'm sending you a gift, please swipe down to open"
export const peroration = "Thank you for reading, wish you happiness every day!"

export const chapters = [{
  "title": "Basic Information",
  "selfInfo": [
    {
      "title": "Name",
      "value": "Wang Zhuohua"
    },
    {
      "title": "Work Experience",
      "value": "3 years"
    },
    {
      "title": "Date of Birth",
      "value": "November 1997"
    },
    {
      "title": "Intended City",
      "value": "Shenzhen, Guangdong Province"
    },
    {
      "title": "Phone",
      "value": "15079292840"
    },
    {
      "title": "Email",
      "value": "506980247@qq.com"
    },
    {
      "title": "Social Page",
      "value": "https://github.com/Tron1234"
    },
    {
      "title": "Personal Blog",
      "value": "http://81.71.149.135"
    }
  ],
  "summarize_title": "Self Summary",
  "summarize": "As a front-end engineer, I not only strive for excellence in technology, but also need to have innovative thinking and certain aesthetic ability to create products that are refreshing to users. I am an outgoing person who likes to communicate with people and make friends. I can quickly integrate into new social circles and enhance teamwork. I have strong learning ability and interpersonal communication skills, have strict control of time, and pursue efficient team development efficiency. In addition, I have a strong interest and desire to learn about new technologies, have a certain understanding of various electronic products, and like to repair them by myself; in daily life, I like to read literature and novels, listen to music, play guitar, and do outdoor activities."
},
{
  "title": "Work Experience",
  "list": [
    {
      "time": "October 2022 - February 2023",
      "company": "Shenzhen Oriental Datang Information Technology Co., Ltd.",
      "jobName": "Web Front-end Engineer",
      "jobContent": [
        "Maintained new requirements and bug fixes for the social security provident fund module of the EHR management system",
        "Developed a cascading component for the EHR management system and embedded it into the list filtering component and table dynamic filtering column component",
        `Developed the "XueWan" app based on uniapp and published it on various app stores`
      ]
    },
    {
      "time": "July 2021 - September 2022",
      "company": "Shiyun Technology (Shenzhen) Co., Ltd.",
      "jobName": "Web Front-end Engineer",
      "jobContent": [
        "Maintained and iterated on the smart construction site web, app, and WeChat mini-program projects",
        "Developed the IoT platform independently",
        "Implemented the overall framework and component library of the front-end project based on the front-end specification architecture and UI design draft",
        "Produced the POC smart patrol system",
        "Developed the Navy Occupational English Interpretation AI Evaluation System"
      ]
    },
    {
      "time": "March 2020 - June 2021",
      "company": "Shenzhen Youqu Life Network Technology Co., Ltd.",
      "jobName": "Front-end Technical Development Engineer",
      "jobContent": [
        "Developed H5, WeChat public account, app, and other platforms based on the uniapp front-end framework",
        "Conducted compatibility adaptation for multiple platform and system versions",
        "Cooperated with back-end developers to interface with API"
      ]
    }
  ]
}, {
  "skillsIntro": "Skills Introduction",
  "commonSkills": "Common Skills",
  "skills": [
    "Vue",
    "uni-app",
    "WeChat Mini Program",
    "tailwindCSS",
    "Nodejs",
    "JQuery",
    "Java",
    "Mysql"
  ],
  "skillsArticle": [
    "Proficient in Vue.js frontend framework, using vue-cli scaffold to create projects, vue-router to control business logic jumps, vuex to control global variables, axios for network data requests. Familiar with Vue.js underlying source code, such as data interception and template rendering.",
    "Proficient in uni-app frontend framework based on Vue.js, familiar with basic API calls in the documentation, understand the underlying implementation code of uni-app, adept at dealing with compatibility issues on multiple platforms and IOS/Android app system versions, cloud and offline imports of native components, and compatibility solutions for H5 and WeChat official accounts (JSSDK). Proficient in H5, app cloud packaging, and offline packaging methods.",
    "Familiar with the development process of WeChat Mini Program, proficient in handling solutions based on Mini Program APIs such as WeChat Pay, WeChat Notifications, WeChat Login, and WeChat Sharing.",
    "Proficient in frontend basics such as HTML5, CSS3, JavaScript (ES6), jQuery, Ajax, and skilled in handling mobile adaptation and compatibility issues.",
    "Understanding of browser basic principles, layer rendering, memory space allocation, garbage collection, etc.",
    "Understanding of trendy frontend technologies such as Vue3, tailwind CSS, nuxt (SPA server-side rendering framework), TypeScript, ChatGPT, etc.",
    "Understanding of Java SE, koa (node.js) backend interface code writing, and basic MySQL query statement writing.",
    "Understanding of basic Linux operations and basic deployment of web projects.",
    "Proficient in using Photoshop and Illustrator frontend UI design tools, drawing SVG icons, etc."
  ]
}, {
  "title": 'Project Experience (Client-side)',
  "projectDesc": 'Project Description',
  "responsibilityDesc": 'Responsibility Description',
  "keyPoints": 'Technical Highlights',
  "list": [{
    "icon": './static/img/uarea.png',
    "name": 'U-Area',
    "projectDesc": 'U-Area is mainly responsible for the domestic and some overseas rental housing businesses. It focuses on personal housing rental transaction services and provides innovative real-time rental platform, which uses artificial intelligence to match tenants and landlords in real-time.',
    "responsibilityDesc": 'Developed an app, H5, and a public account for U-Area project based on the uni-app framework to iterate the original project.',
    "keyPoints": ['Read and modify the SDK source code locally in the HbuilderX editor to implement some functions that were not implemented by the framework.', 'Introduced third-party developed native plugins into Android Studio, and packaged them through uni-app offline packaging.', 'Implemented the IM function using the websocket encapsulated by uni-app, such as user-to-user, user-to-customer service, system messages, in-app push notifications, etc.', 'Solved the problem of the chat input box being repeatedly covered by the keyboard on the H5 page, and processed IOS and Android terminals separately according to the chat operation logic of WeChat users. Emojis are represented by "[Emoji]" on IOS and by images on Android, and similar designs.', 'Implemented a user circular avatar pseudo-random algorithm and used canvas to draw a user radar page, accompanied by an animation effect of gradually popping up avatars.', 'Compatible with some functions of WeChat public account platform, such as uploading pictures, sending voice messages, etc., through calling JSSDK library.', 'Implemented WeChat and Alipay (not supported by WeChat public account) payment functions on App, H5, and WeChat public account platforms.', 'Created a .9 image for the Android startup page, and wrote an iOS storyboard for the startup page, and launched them on major app stores.']
  }, {
    "icon": './static/img/xuewan.png',
    "name": 'Learn and Play App',
    "projectDesc": 'Learn and Play is an app that helps you start scientific and efficient learning.',
    "responsibilityDesc": 'Collaborated with the development team to develop and launch the app project.',
    "keyPoints": ['Developed the app side based on the uni-app framework.', 'Wrote SQLite CRUD functions and encapsulated them into functions for easy calling. Used for storing user learning data and synchronizing with the backend database regularly.', 'Read the local SQLite to get the word cards that the user currently needs to review.', 'Wrote the user review logic and learning logic based on the algorithm model.']
  }]
}, {
  "title": "Project Experience (Server-side)",
  "projectDesc": "Project Description",
  "responsibilityDesc": "Responsibility Description",
  "keyPoints": "Technical Points",
  "list": [{
    "name": "EHR Management System",
    "projectDesc": "This system is used for managing employee recruitment, social security provident fund, entry, exit and other information within the company.",
    "responsibilityDesc": "Optimized the web end of the project and implemented new requirements.",
    "keyPoints": [
      "Wrote a cascading component compatible with the tree and select dropdown boxes, supporting multiple selections. Currently, there are two modes: the first mode automatically echoes all selected nodes by setting v-model to the leaf node code (unique value) of the tree. The second mode automatically echoes all selected parent nodes by setting v-model to the selected tree structure, and calls them separately based on whether the node code exists.",
      "Wrote a list filtering condition configuration component, including common components such as input boxes, check boxes, selectors, etc., to achieve list filtering function through json configuration items, and added vuedraggable to sort and select filtering conditions."
    ]
  },
  {
    "name": "POC Fusion Communication",
    "projectDesc": "This system is a set of intelligent patrol systems developed for security guards, police officers and other groups, mainly used for intelligent device calling, group calling and other functions.",
    "responsibilityDesc": "Built the company's front-end UI architecture and component library for use in this project, introduced offline map function, implemented commonly used APIs in map library, and built project management end using own encapsulated component library.",
    "keyPoints": [
      "Based on Vue+elementUI framework, Vuex state management, Vue-router routing.",
      "Based on elementUI encapsulation to conform to the company's front-end specifications for project architecture.",
      "Independently designed the web end IM interface, communicated with the back-end via websocket by calling openIM API.",
      "Due to the project's VPN intranet usage, offline map is a must, so I researched the way to introduce Baidu map offline, and used Python to crawl Baidu map POI data for location search and reverse address resolution."
    ]
  },
  {
    "name": "Navy Professional English Interpretation AI Evaluation System",
    "projectDesc": "This system is developed for the vocational college English exam, with student, teacher, and administrator roles, implementing different functions according to different roles, such as managing students, managing test questions, adding exams, and online exams for students.",
    "responsibilityDesc": "Built the overall project framework to assign specific functional pages to colleagues, implemented role-based login, developed different main pages for different roles, implemented online exams, encapsulated a global audio component, wrote test documents, and implemented adaptive functions for some pages.",
    "keyPoints": [
      "Based on Vue+elementUI framework, Vuex state management, Vue-router routing (dynamic addition of routes based on roles).",
      "Encapsulated global audio component for student recording playback and exam question audio playback. Only one audio can be played globally at the same time, and automatic stop function is added for audio mute on mobile.",
      "Based on muaz-khan/RecordRTC and xiangyuecn/Recorder, added unimplemented functions, packaged them into npm packages needed for the project and released them, referenced and encapsulated them into an h5 recording component in the project.",
      "As the recording component needs to be normally recorded under the https protocol, nginx server reverse proxy and host were used for development and debugging of this project."
    ]
  }
  ]
}, {
  "name": "Jiujiang University",
  "introduction": `Jiujiang University is a state-owned and publicly funded full-time undergraduate institution approved by the Ministry of Education of China. It is located in Jiujiang, a historical and cultural city in the middle and lower reaches of the Yangtze River in Jiangxi Province, at the junction of four provinces: Jiangxi, Anhui, Hubei and Hunan. Situated at the foot of Mount Lu, on the banks of the Yangtze River and Poyang Lake, Jiujiang University benefits from the unique advantages of a famous city, mountain, river, and lake. In particular, the White Deer Cave Academy, with a history of more than a thousand years and the reputation of being the "first academy under heaven", has endowed Jiujiang University with profound cultural heritage.`,
  "college": "School of Information Science and Technology",
  "major": "Computer Science and Technology",
  "list": [
    "Received third-class scholarship from the college in 2019",
    "Obtained National Second-level Computer (Java) certificate, Junior Software Developer certificate, and Intermediate Computer Professional Qualification",
    "Received National Encouragement Scholarship in 2016 and 2017"
  ],
  "time": "2016.09-2020.06"
}]