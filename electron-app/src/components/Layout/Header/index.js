import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  HeaderContainer,
  LeftWrapper,
  RightWrapper,
  Logo,
  IconWrapper,
  ToolBar,
  SearchBar,
  SearchInput,
  Microphone,
} from './style'

const Header = () => {
  const history = useHistory()
  const handleGoBack = () => history.goBack()
  const handleGoForward = () => history.goForward()
  
  return (
    <HeaderContainer>
      <LeftWrapper>
        <Logo imgUrl={'../../../assets/image/topbar.png'} />
        <IconWrapper>
          <i className="iconfont arrow-left" onClick={handleGoBack}>
            &#xe744;
          </i>
        </IconWrapper>
        <IconWrapper>
          <i className="iconfont arrow-right" onClick={handleGoForward}>
            &#xe743;
          </i>
        </IconWrapper>
        <SearchBar>
          <i className="iconfont icon-search">&#xe7b4;</i>
          <SearchInput placeholder={`搜索`} />
        </SearchBar>
        <Microphone>
          <i className="iconfont icon-microphone">&#xe7bf;</i>
        </Microphone>
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </HeaderContainer>
  )
}

export default Header
