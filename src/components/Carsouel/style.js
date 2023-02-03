import styled, { keyframes } from 'styled-components'

export const CarsouelWrapper = styled.div`
  width: 100%;
`

export const OperateWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  z-index: 0;
  opacity: 0;
`
export const Operate = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  vertical-align: center;
  margin: 10px;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  background-color: rgba(204, 204, 204, 0.5);

  color: rgb(227, 227, 227);
  &:hover {
    color: #ffffff;
  }
  /* background-color: #ffffff; */
`

export const CarsouelMain = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: white;
  &:hover {
    .operate {
      z-index: 1;
      opacity: 1;
      transition: opacity ease 0.2s;
    }
  }
`
export const BannerWrapper = styled.div`
  width: 540px;
  position: relative;
`

export const BannerBaseItem = styled.div`
  position: absolute;
  background-color: green;
  top: 0;
  height: 200px;
  width: 540px;
  border-radius: 10px;
  transform: scale(0.81);
`
const getTransform = ({ operate, index }) => {
  if (index === operate.front) {
    return `scale(1)`
  } else {
    return `scale(.81)`
  }
}
const getTransformOrigin = ({ operate, index }) => {
  if (index === operate.front) {
    return ``
  } else if (index === operate.front + 1) {
    return `226% 50%`
  } else if (index === operate.front - 1) {
    return `-126% 50%`
  } else if (index === 0 && operate.front === operate.max - 1) {
    return `226% 50%`
  } else if (index === operate.max - 1 && operate.front === 0) {
    return `-126% 50%`
  } else {
    return `0% 50%`
  }
}
const getZindex = ({ operate, index }) => {
  if (index === operate.front) {
    return `999`
  } else if (
    index === operate.front + 1 ||
    (operate.front === operate.max - 1 && index !== operate.front + 1)
  ) {
    return `99`
  } else if (
    index === operate.front - 1 ||
    (operate.front === 0 && index !== operate.front - 1)
  ) {
    return `99`
  } else {
    return `9`
  }
}
export const BannerItem = styled(BannerBaseItem)`
  transform: ${(props) => getTransform(props)};
  transform-origin: ${(props) => getTransformOrigin(props)};
  z-index: ${(props) => getZindex(props)};
  transition: transform cubic-bezier(0.4, 0.4, 0.4, 0.4) 0.4s,
    z-index cubic-bezier(0.4, 0.4, 0.4, 0.4) 0.4s,
    transform-origin cubic-bezier(0.4, 0.4, 0.4, 0.4) 0.4s; ;
`

export const BannerCover = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`
const getBgColor = ({ titleColor }) => {
  let color = `rgb(74, 121, 204)`
  switch (titleColor) {
    case 'red':
      color = `rgb(204,74,74)`
      break
    case 'blue':
      color = `rgb(74, 121, 204)`
      break
    default:
      color = `rgb(74, 121, 204)`
      break
  }
  return color
}
export const TypeTitle = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 22px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  line-height: 22px;
  color: #ffffff;
  font-size: 12px;
  padding: 0 10px;
  background-color: ${(props) => getBgColor(props)};
`

export const DotWraper = styled.ul`
  position: absolute;
  bottom: -20px;
  display: flex;
`

export const Dot = styled.li`
  
`
