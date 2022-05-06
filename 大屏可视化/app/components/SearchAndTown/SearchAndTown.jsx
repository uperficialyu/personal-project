import React, { Component } from 'react';
import SearchModel from './searchModal';
import Ajax from 'lib/ajax';
import './SearchAndTown.scss';

export default class SearchAndTown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      titleList: ['权利人', '编码', '种植品种', '面积', '所属村镇', '电话号码', '操作'],
      contentList: [],
      inputValue: '',
      townValue: 'all',
      villageValue: '',
      villageList: [],
      villageListStatic: [],
    };
  }

  componentDidMount() {
    this.getVillageInterface();
    // 13669073711
  }

  // 搜索
  handleSearch = () => {
    const { inputValue } = this.state;
    // this.getMobilePeople(inputValue);
    this.getMobilePeople1(inputValue);
  }

  // 设置输入框文字
  handleInputValue = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  }

  // 权利人和手机号搜索
  getMobilePeople1 = (val) => {
    let params = {
      search: val
    };
    Ajax('get', '/hydra-bigdata-admin/api/v1/dynamic/data/query/planting-dk-search', params).then((res) => {
      if (res.state === 200) {
        const list = res.results.features || [];
        if (list.length === 0) {
          return;
        }
        this.setState({
          contentList: list,
          visible: true,
          inputValue: ''
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取全部的村名 废弃
  getVillageInterface = () => {
    let params = {
      group: 'cite',
      id: 'village',
      maxFeatures: '5000'
    };
    Ajax('get', '/hydra-code-egis/api/v1/geoserver/get-json-data', params).then((res) => {
      const features = res.features || [];
      this.setState({
        villageListStatic: features
      });
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取乡镇对应的村名
  getVillageName = (townName) => {
    const { villageListStatic } = this.state;
    const villageList = villageListStatic.filter(item => item.properties['乡名称'] === townName);
    const list = villageList.map(item => item.properties['村名称']);
    if (list.length !== 0) {
      list.unshift('全村');
    }
    this.setState({
      villageList: list,
    });
  }

  // 定位
  handlevillage = (val) => {
    const { id } = this.props;
    const dom = document.getElementById(id).contentWindow;
    const geometry = val.geometry;
    dom.located(val);
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
  }

  // 选择镇
  townSelect = (e) => {
    const { id } = this.props;
    const dom = document.getElementById(id).contentWindow;
    const value = e.target.value;
    this.setState({
      townValue: value,
      villageValue: '',
    });
    dom.town_selectClicl(value);
    this.getVillageName(value);
  }

  // 选择村
  villageSelect = (e) => {
    const { id } = this.props;
    const { villageListStatic, townValue } = this.state;
    const value = e.target.value;
    this.setState({
      villageValue: value
    });
    if (value === '全村') {
      const dom = document.getElementById(id).contentWindow;
      dom.town_selectClicl(townValue);
      return;
    }
    this.positionSelect(villageListStatic, townValue, value);
  }

  // 选择位置
  positionSelect = (villageListStatic, townValue, value) => {
    const { id } = this.props;
    const dom = document.getElementById(id).contentWindow;
    let domonj = {};
    for (let i = 0; i < villageListStatic.length; i++) {
      if (villageListStatic[i].properties['村名称'] === value) {
        domonj = villageListStatic[i];
        break;
      }
    }
    dom.locatedVillage(domonj);
  }

  render() {
    const {
      inputValue,
      visible,
      titleList,
      contentList,
      townValue,
      villageValue,
      villageList
    } = this.state;

    return (
      <div className="search-andTown">
        <div className="search-andTown-search">
          <input onChange={this.handleInputValue} placeholder="按权利人/手机号搜索" value={inputValue} className="search-andTown-search-input" type="text" />
          <span onClick={this.handleSearch} className="search-andTown-search-button">搜索</span>
        </div>

        <div className="search-andTown-town">
          <div className="search-andTown-town-left">
            <select onChange={this.townSelect} value={townValue} className="item-select" name="" id="">
              <option value="all">全县</option>
              <option value="水田坝乡">水田坝乡</option>
              <option value="屈原镇">屈原镇</option>
              <option value="归州镇">归州镇</option>
              <option value="郭家坝镇">郭家坝镇</option>
              <option value="九畹溪镇">九畹溪镇</option>
              <option value="茅坪镇">茅坪镇</option>
              <option value="杨林桥镇">杨林桥镇</option>
              <option value="梅家河乡">梅家河乡</option>
              <option value="磨坪乡">磨坪乡</option>
              <option value="两河口镇">两河口镇</option>
              <option value="沙镇溪镇">沙镇溪镇</option>
              <option value="泄滩乡">泄滩乡</option>
            </select>
          </div>

          <div className="search-andTown-town-right">
            <select onChange={this.villageSelect} value={villageValue} className="item-select" name="" id="">
              {
                villageList.map((item, index) => {
                  return (
                    <option value={item}>{item}</option>
                  );
                })
              }
            </select>
          </div>
        </div>

        {
          visible ?
            <SearchModel handlevillage={this.handlevillage} handleClose={this.handleClose} titleList={titleList} contentList={contentList} />
            : ''
        }
      </div>
    );
  }
}
