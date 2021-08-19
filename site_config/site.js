// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'arthas.aliyun.com', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'tutorials',
        text: 'ONLINE TUTORIALS',
        link: 'https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: 'https://arthas.aliyun.com/doc/en/',
      },
      {
        key: 'solution',
        text: 'SOLUTIONS',
        link: '',
        imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png',
        children: [{
          key: 'micoservice',
          text: 'Microservice solutions',
          link: 'https://cn.aliyun.com/product/aliware/mse?spm=arthas.topbar.0.0.0'
        }, {
          key: 'gts',
          text: 'Distributed transaction solution',
          link: 'https://www.aliyun.com/aliware/txc?spm=arthas.topbar.0.0.0'
        }, {
          key: 'msha',
          text: 'High-availability solution',
          link: 'https://www.aliyun.com/product/ahas?spm=arthas.topbar.0.0.0'
        }, {
          key: 'serverless',
          text: 'Serverless solution for miscoservices',
          link: 'https://cn.aliyun.com/product/aliware/sae?spm=arthas.topbar.0.0.0'
        },
        {
          key: 'appas',
          text: 'PaaS solution',
          link: 'https://www.aliyun.com/product/edas?spm=arthas.topbar.0.0.0'
        }, {
          key: 'mesh',
          text: 'Service mesh solution',
          link: 'https://www.aliyun.com/product/servicemesh?spm=arthas.topbar.0.0.0',
        }
        ]
      },
      {
        key: 'download',
        text: 'DOWNLOAD',
        link: 'https://arthas.aliyun.com/doc/en/download.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: 'https://github.com/alibaba/arthas/issues',
      },
    ],
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: 'https://arthas.aliyun.com/doc/en/',
        },
        {
          text: 'Quick start',
          link: 'https://arthas.aliyun.com/doc/en/quick-start.html',
        },
        {
          text: 'Developer guide',
          link: 'https://github.com/alibaba/arthas/blob/master/CONTRIBUTING.md',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Online Tutorials',
          link: 'https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en',
        },
        {
          text: 'User cases',
          link: 'https://github.com/alibaba/arthas/issues?q=label%3Auser-case',
        },
        {
          text: 'Download',
          link: 'https://arthas.aliyun.com/doc/en/download.html',
        },
        {
          text: 'Community',
          link: 'https://github.com/alibaba/arthas/issues',
        },
      ],
    },
    copyright: '© Copyright 2018-2020, Alibaba Middleware Group, and contributors',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'tutorials',
        text: '在线教程',
        link: 'https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn',
      },
      {
        key: 'docs',
        text: '文档',
        link: 'https://arthas.aliyun.com/doc/',
      }, {
        key: 'solution',
        text: '解决方案',
        link: '',
        imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png',
        children: [{
          key: 'micoservice',
          text: '微服务解决方案',
          link: 'https://cn.aliyun.com/product/aliware/mse?spm=arthas.topbar.0.0.0'
        }, {
          key: 'gts',
          text: '分布式事务解决方案',
          link: 'https://www.aliyun.com/aliware/txc?spm=arthas.topbar.0.0.0'
        }, {
          key: 'msha',
          text: '高可用解决方案',
          link: 'https://www.aliyun.com/product/ahas?spm=arthas.topbar.0.0.0'
        }, {
          key: 'serverless',
          text: '微服务Serverless解决方案',
          link: 'https://cn.aliyun.com/product/aliware/sae?spm=arthas.topbar.0.0.0'
        },
        {
          key: 'appas',
          text: 'PaaS解决方案',
          link: 'https://www.aliyun.com/product/edas?spm=arthas.topbar.0.0.0'
        }, {
          key: 'mesh',
          text: '服务网格解决方案',
          link: 'https://www.aliyun.com/product/servicemesh?spm=arthas.topbar.0.0.0',
        }
        ]
      },
      {
        key: 'download',
        text: '下载',
        link: 'https://arthas.aliyun.com/doc/download.html',
      },
      {
        key: 'community',
        text: '社区',
        link: 'https://github.com/alibaba/arthas/issues',
      },
    ],
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: 'https://arthas.aliyun.com/doc/',
        },
        {
          text: '快速开始',
          link: 'https://arthas.aliyun.com/doc/quick-start.html',
        },
        {
          text: '开发者指南',
          link: 'https://github.com/alibaba/arthas/blob/master/CONTRIBUTING.md',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '在线教程',
          link: 'https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn',
        },
        {
          text: '用户案例',
          link: 'https://github.com/alibaba/arthas/issues?q=label%3Auser-case',
        },
        {
          text: '下载',
          link: 'https://arthas.aliyun.com/doc/download.html',
        },
        {
          text: '社区',
          link: 'https://github.com/alibaba/arthas/issues',
        },
      ],
    },
    copyright: '© Copyright 2018-2020, Alibaba Middleware Group, and contributors',
  },
};
