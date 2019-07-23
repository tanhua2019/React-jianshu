import React, { PureComponent } from 'react'

import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Remember from './components/Remember'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { BackTop } from './style'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Remember></Remember>
          <Writer></Writer>
        </HomeRight>
        {
          showScroll ? <BackTop onClick= {this.handleScrollTop}>回到顶部</BackTop> : null
        } 
      </HomeWrapper> 
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollShow)
  }

  componentWillMount() {
    window.removeEventListener('scroll',this.props.changeScrollShow)
  }
  
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.topShow(true))
    } else {
      dispatch(actionCreators.topShow(false))
    }
    // console.log(document.documentElement.scrollTop);
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);