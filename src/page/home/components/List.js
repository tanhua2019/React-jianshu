import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return <ListItem key={item.get('id')}>
              <img className="list_img" src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="test">{item.get('test')}</p>
              </ListInfo>
            </ListItem>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

const mapDispathToProps = (dispath) => ({

})

export default connect(mapStateToProps, mapDispathToProps)(List);