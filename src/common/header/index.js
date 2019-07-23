import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

import { HeaderWrapper, Logo, Nav, Navitem, Input, Addition, Button, Search, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'


class Header extends PureComponent {

  getListArea() {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChange, totalPage } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    for (let i = (page * 10); i < (page + 1) * 10; i++) {
      pageList.push(
        <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
      )
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChange(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe612;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {
            pageList
            // list.map((item) => {
            //   return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            // })
          }
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Nav>
          <Navitem className='left active'>首页</Navitem>
          <Navitem className='left'>下载APP</Navitem>
          <Navitem className='right'>登陆</Navitem>
          <Navitem className='right'><i className='iconfont'>&#xe636;</i></Navitem>
          <Search>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <Input
                className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}></Input>
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom ' : 'iconfont zoom'}>&#xe629;</i>
            {this.getListArea()}
          </Search>
        </Nav>
        <Addition>
          <Button className="write"><i className='iconfont'>&#xe61b;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

// class Header extends Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.handleInputFocus = this.handleInputFocus.bind(this)
//   //   this.handleInputBlur = this.handleInputBlur.bind(this)
//   // }

//   render() {
//     return (
//     );
//   }

//   // handleInputFocus() {
//   //   this.setState({
//   //     focused: true
//   //   })
//   // }
//   // handleInputBlur() {
//   //   this.setState({
//   //     focused: false
//   //   })
//   // }
// }

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
    // state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // console.log(list);
      // if (list.size === 0) {
      //   dispatch(actionCreators.getList())
      // }
      (list.size === 0) && dispatch(actionCreators.getList())

      // console.log('122');
      // const action = {
      //   type: 'search_focus'
      // }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      // console.log(spin,'www');
      // spin.style.transform= 'rotate(360deg)'
      // console.log(page, totalPage);
      if (page < totalPage - 1) {
        dispatch(actionCreators.handChange(page + 1))
      } else {
        dispatch(actionCreators.handChange(0))
      }
      // dispatch(actionCreators.handChange())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);