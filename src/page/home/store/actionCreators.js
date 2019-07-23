import axios from 'axios'
import * as constants from './contants'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const getMoreData = (list,nextPage) => ({
  type: constants.GET_MORE_DATA,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      const action = changeHomeData(result)
      dispatch(action)
    }).catch(err => { })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      console.log(res);
      const action = getMoreData(res.data.data,page + 1)
      dispatch(action)
    })
  }
}

export const topShow = (show) => ({
  type: constants.TOP_SHOW,
  show
})