import { observable, action } from 'mobx';

export default class LangStore {
  @observable lang = sessionStorage.getItem('lang') || 'ja';
  constructor() {
  }

  // 修改是否展示牌价部分  展示全屏查询列表
  @action changeLanguage = (lang) => {
    this.lang = lang;
  }
}