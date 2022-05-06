export default {
  teaTrade: {
    fivedays: '/songyang-tea/api/v1/tea-trade-stat/nearly-days',
    fiveyears: '/songyang-tea/api/v1/tea-trade-stat/nearly-years',
    sell: '/songyang-tea/api/v1/tea-trade-stat/e-sell-stat',
    rank: '/songyang-tea/api/v1/tea-trade-stat/trade-rank',
    count: '/songyang-tea/api/v1/tea-trade-stat/base-count',
  },
  login: {
    getSystemInfor: "/hydra-opinion-analysis-console/api/v1/sys",
    login: "/hydra-opinion-analysis-console/api/v1/login",
  },
  home: {
    list: '/hydra-opinion-analysis-console/api/v1/leader-activity/list',
    newsList: '/hydra-opinion-analysis-console/api/v1/news/list',
    newsInfo: '/hydra-opinion-analysis-console/api/v1/news/info',
    leaderInfo: '/hydra-opinion-analysis-console/api/v1/leader-activity/info', // 领导信息
    pictures: '/hydra-opinion-analysis-console/api/v1/leader-activity/pictures', // 图集
    activities: '/hydra-opinion-analysis-console/api/v1/leader-activity/activities', // 领导各类活动
    words: '/hydra-opinion-analysis-console/api/v1/leader-activity/hot-words', // 热点词
    news: '/hydra-opinion-analysis-console/api/v1/leader-activity/news', // 热点词
  },
  monographicAnalysis: {
    overview: '/hydra-opinion-analysis-console/api/v1/topic-analysis/overview', // 专题概览
    first: '/hydra-opinion-analysis-console/api/v1/topic-analysis/first', // 首发资讯
    latest: '/hydra-opinion-analysis-console/api/v1/topic-analysis/latest', // 最新资讯
    area: '/hydra-opinion-analysis-console/api/v1/topic-analysis/area', // 资讯地域分布
    report: '/hydra-opinion-analysis-console/api/v1/topic-analysis/top-report', // 报道量排行
    keyword: '/hydra-opinion-analysis-console/api/v1/topic-analysis/keyword', // 核心词
    heat: '/hydra-opinion-analysis-console/api/v1/topic-analysis/heat', // 专题热度趋势
    emotion: '/hydra-opinion-analysis-console/api/v1/topic-analysis/emotion', // 专题情感趋势
    media: '/hydra-opinion-analysis-console/api/v1/topic-analysis/media', // 媒体平台数量
    article: '/hydra-opinion-analysis-console/api/v1/topic-analysis/media-article', // 媒体平台文章数量
  },
  propagationPath: {
    path: '/hydra-opinion-analysis-console/api/v1/news/path', // 新闻传播路径
  }
}

