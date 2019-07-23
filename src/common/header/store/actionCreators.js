import * as actionTypes from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const handChange = (page) => ({
  type: actionTypes.HAND_CHANGE,
  page
})


export const getList = () => {
  return (dispatch) => {
    // console.log('123');
    axios.get('/api/headerList.json').then(res => {
      // const action = {
      //   type: 'change_list',
      //   data: res.data
      // }
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(err => {
      console.log(err);
    })
  }
}