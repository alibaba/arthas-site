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
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '特性1',
          content: '特性1的简单概括',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '特性2',
          content: '特性2的简单概括',
        },
        {
          img: '/img/feature_service.png',
          title: '特性3',
          content: '特性3的简单概括',
        },
        {
          img: '/img/feature_hogh.png',
          title: '特性4',
          content: '特性4的简单概括',
        },
        {
          img: '/img/feature_runtime.png',
          title: '特性5',
          content: '特性5的简单概括',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '特性6',
          content: '特性6的简单概括',
        },
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
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
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
      ],
    },
  },
};
