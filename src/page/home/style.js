import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner_img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  border-radius: 4px;
  .topic_img {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  .list_img {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #333;
  }
  .test: {

  }
`;

export const Remembers = styled.div`
  margin: 10px 0;
  width: 280px;
`;

export const RememberItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;


export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  border-radius: 3px;
  text-align: center;
  border: 1px solid #ccc;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  margin: 20px 0;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;