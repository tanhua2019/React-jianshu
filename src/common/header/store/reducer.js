import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 0,
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionTypes.MOUSE_ENTER:
      console.log('222');
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.HAND_CHANGE:
      return state.set('page', action.page)
    default:
      return state;
  }
  // if (action.type === actionTypes.SEARCH_FOCUS) {
  //   return state.set('focused', true)
  //   // {
  //   //   focused: true
  //   // }
  // }
  // if (action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focused', false)
  //   // {
  //   //   focused: false
  //   // }
  // }
  // if (action.type === actionTypes.CHANGE_LIST) {
  //   console.log('test');
  //   return state.set('list', action.data)
  // }
  // return state;
}
