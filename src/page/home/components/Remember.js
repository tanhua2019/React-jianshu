import React, { PureComponent } from 'react'
import { Remembers, RememberItem } from '../style'
import { connect } from 'react-redux'

class Remember extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return <Remembers key={item.get('id')}>
            <RememberItem imgUrl = {item.get('imgUrl')}></RememberItem>
          </Remembers>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList'])
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Remember);