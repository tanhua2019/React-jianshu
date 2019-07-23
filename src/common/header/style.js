import styled from 'styled-components'
import logopic from '../../static/image/logo.png'

export const HeaderWrapper = styled.div`
 position: relative;
 height: 56px;
 border-bottom: 1px solid #ccc;
`

export const Logo = styled.a`
 position: absolute;
 left: 0;
 top: 0;
 display: block;
 width: 100px;
 height: 56px;
 background: url(${logopic});
 background-size: contain;
 `

 export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 100px;
  box-sizing: border-box;
 `;

 export const Navitem = styled.div`
 font-size: 16px;
 height: 56px;
 line-height: 56px;
 padding: 0 20px;
 cursor: pointer;
 &.left {
  float: left;
 }
 &.right {
  float: right;
 }
 &.active {
   color: #ea6f5a;
 }
 `;


export const Search = styled.div`
 float: left;
 position: relative;
 .zoom {
   position: absolute;
   right: 6px;
   bottom: 3px;
   width: 30px;
   line-height: 30px;
   border-radius: 15px;
   text-align: center;
   &.focused {
     background: #777;
     color: #fff;
   }
 }
`;

 export const Input = styled.input.attrs({
   placeholder: '搜索'
 })`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  outline: none;
  border: none;
  background: #eee;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  color: #777
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
   transition: all .2s ease-out
  }
  &.slide-exit.active {
   width: 160px;
  }
 `;

 export const SearchInfo = styled.div`
  background: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0 ,0, 0, .2)
  
 `;

 export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  fontsize: 14px;
  color: #969696;
 `

 export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-right: 5px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
 `

 export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
  
 `

 export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
 `;
 export const Button = styled.div`
  float: right;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  padding: 0 20px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 19px;

  &.reg {
    color: #ea6f5a;
  }
  &.write {
    color: #fff;
    background: #ea6f5a;
  }
 `;