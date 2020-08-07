import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Arthas',
      briefIntroduction: 'Java应用诊断利器',
      buttons: [
        {
          text: '立即开始',
          link: 'https://arthas.aliyun.com/doc/quick-start.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/alibaba/arthas',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Java 应用诊断利器',
      desc: 'Arthas 是Alibaba开源的Java诊断工具，深受开发者喜爱。',
      img: '/img/dashboard.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_hogh.png',
          title: 'Dashboard',
          content: '实时查看系统的运行状况',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '查看入参/返回值/异常',
          content: '查看函数调用的参数，返回值和异常',
        },
        {
          img: '/img/feature_transpart.png',
          title: '在线热更新',
          content: 'jad/sc/redefine 一条龙热更新代码',
        },
        {
          img: '/img/feature_service.png',
          title: '类冲突',
          content: '秒解类冲突问题，定位类加载路径',
        },
        {
          img: '/img/feature_runtime.png',
          title: '性能热点',
          content: '快速定位应用的热点，生成火焰图',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'WebConsole',
          content: '在线诊断，点开网页诊断线上应用',
        }
      ],
    },

    users: {
      title: '用户',
      desc: <span>请在 <a rel="noopener noreferrer" target="_blank" href="https://github.com/alibaba/arthas/issues/111">Wanted: who&#39;s using arthas</a> 上提供信息来帮助Arthas做的更好。</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_didi.png',
        '/img/users_icbc.png',
        '/img/users_qunar.png',
        '/img/users_kaola.png',
        '/img/users_telecom.png',
        '/img/users_weidian.png',
        '/img/users_yinlian.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Arthas',
      briefIntroduction: 'Java Diagnostic Tool',
      buttons: [
        {
          text: 'Quick Start',
          link: 'https://arthas.aliyun.com/doc/en/quick-start.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/alibaba/arthas',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Java Diagnostic Tool',
      desc: 'Arthas is a Java diagnostic tool open-sourced by Alibaba middleware team. It is widely adopted and popular among the developers.',
      img: '/img/dashboard.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_hogh.png',
          title: 'Dashboard',
          content: 'View the operating status of the system in real time',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Parameters/Return values/Exceptions',
          content: 'View method parameters, return values and exceptions',
        },
        {
          img: '/img/feature_transpart.png',
          title: 'Online hotswap',
          content: 'jad/sc/redefine online hotswap',
        },
        {
          img: '/img/feature_service.png',
          title: 'Class conflict',
          content: 'Resolve the class conflict problem in seconds, locate the class loading path',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'Flame Graph',
          content: 'Quickly locate application hotspots and generate flame graphs',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'WebConsole',
          content: 'Online diagnosis',
        }
      ]
    },

    users: {
      title: 'users',
      desc: <span>Providing your info on <a rel="noopener noreferrer" target="_blank" href="https://github.com/alibaba/arthas/issues/111">Wanted: who&#39;s using arthas</a> to help improving arthas better</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_didi.png',
        '/img/users_icbc.png',
        '/img/users_qunar.png',
        '/img/users_kaola.png',
        '/img/users_telecom.png',
        '/img/users_weidian.png',
        '/img/users_yinlian.png',
      ],
    },
  },
};
