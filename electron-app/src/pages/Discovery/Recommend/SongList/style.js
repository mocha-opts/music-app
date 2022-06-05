import styled from 'styled-components'
const ellipsis = `
  display: -webkit-box;
  overflow:hidden;
  text-overflow:ellipsis;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical
`
export const SubTitle = styled.span`
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: 24px;
  font-size: 19px;
  font-weight: bold;
  color: rgb(55, 55, 55);
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`

export const ArrowIcon = styled.i`
  width: 24px;
  height: 24px;
  font-size: 28px;
  font-weight: 20;
  text-align: center;
  vertical-align: center;
  line-height: 26px;
`
export const SongListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap:18px;
`
export const SongListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  flex: 1 1 140px;
  /* max-width: 190px; */
  ${ellipsis}
`

export const Container = styled.div`
  position: relative;
  /* max-width: 190px; */
  width: 100%;
  padding-top: 100%;
  border-radius: 5px;
  /* background: ${(props) =>
    props.url ? `url(${props.url}) no-repeat` : ''}; */
  /* background-size: contain; */
  cursor: pointer;
  margin-bottom: 9px;
  .icon-show {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
  &:hover {
    .icon-show {
      opacity: 1;
    }
  }
`
export const Cover = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
`
export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  display: inline;
  color: rgb(55, 55, 55);

  &:hover {
    color: rgb(0, 0, 0);
  }
`
export const PlayIcon = styled.i`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  color: rgb(236, 65, 65);
`
export const PlayCount = styled.span`
  position: absolute;
  display: flex;
  align-items: center;

  top: 5px;
  right: 8px;
  font-size: 11px;
  color: #ffffff;
  .play-arrow {
    font-size: 14px;
  }
`
