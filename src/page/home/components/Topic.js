import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return <TopicItem key={item.get('id')}>
              <img className="topic_img" src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

const mapDispathToProps = (dispath) => ({

})

export default connect(mapStateToProps, mapDispathToProps)(Topic);