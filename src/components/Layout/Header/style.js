import React from 'react'
import styled from 'styled-components'
import style from '../../../style/global-style'
import PropTypes from 'prop-types'

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  background-color: ${style['theme-color']};
  flex-direction: row;
  justify-content: flex-start;
`
export const Logo = styled.div`
  height: 60px;
  width: 180px;
  /* background-color: white; */
  /* background: url(${(props) => props.imgUrl}) no-repeat 0 9999px; */
  background-position: 0 0;
`
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 3%);
  .active {
    background-color: rgb(0 0 0 / 10%);
    color: rgb(255 255 255 / 90%);
    cursor: pointer;
  }

  line-height: 24px;
  text-align: center;
  .arrow-left,
  .arrow-right {
    font-size: 18px;
    color: rgb(255 255 255 / 30%);
    user-select: none;
    -webkit-user-drag: none;
  }
`
export const RightWrapper = styled.div``
export const ToolBar = styled.div`
  height: 60px;
  width: 380px;
`
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px 0 14px;
  /* justify-content: center; */
  height: 32px;
  border-radius: 20px;
  background-color: rgb(0 0 0 / 10%);
  .icon-search {
    font-size: 20px;
    color: rgb(255 255 255 / 80%);
    user-select: none;
    -webkit-user-drag: none;
    &:hover {
      color: rgb(255 255 255 / 20%);
    }
  }
  .icon-microphone {
    font-size: 20px;
    color: rgb(255 255 255 / 80%);
    user-select: none;
    -webkit-user-drag: none;
  }
`
export const Microphone = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 10%);

  text-align: center;
  line-height: 30px;
  cursor: pointer;
  .icon-microphone {
    font-size: 20px;
    color: rgb(255 255 255 / 70%);
  }
`
export const SearchInput = styled.input`
  height: 20px;
  width: 100px;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: 50;
  &::placeholder {
    color: rgb(255 255 255 / 80%);
  }
  &:focus {
    ::placeholder {
      color: transparent;
    }
  }
`
