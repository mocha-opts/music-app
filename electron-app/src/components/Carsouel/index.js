import React, { useState, useEffect } from 'react'
import {
  CarsouelWrapper,
  CarsouelMain,
  OperateWrapper,
  Dot,
  DotWraper,
  BannerItem,
  Operate,
  TypeTitle,
  BannerCover,
  BannerWrapper,
} from './style'
import { getBanner } from '../../api/personalized'
const Carsouel = (props) => {
  const [banners, setBanners] = useState([])
  const [operate, setoperate] = useState({ front: 1, type: 'next', max: 0 })

  useEffect(() => {
    async function fetchData() {
      const result = await getBanner()
      console.log('banner', result)
      setBanners(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    let timer = setInterval(() => goNext(), 3000)
    return () => clearInterval(timer)
  })
  // const getPrevFront = (prev)=>{
  //   if(prev.front === 0){
  //     return banners.length - 1
  //   }else if(){

  //   }
  // }
  const goPrev = () => {
    setoperate((prev) => {
      return {
        ...prev,
        front: prev.front === 0 ? banners.length - 1 : prev.front - 1,
        type: 'prev',
        max: banners.length,
      }
    })
  }
  const goNext = () => {
    setoperate((prev) => {
      return {
        ...prev,
        front: prev.front === banners.length - 1 ? 0 : prev.front + 1,
        type: 'next',
        max: banners.length,
      }
    })
  }
  const showSongListDetail = () => {}
  const selectDot = (e) => {}
  console.log(operate)
  return (
    <CarsouelWrapper>
      <CarsouelMain>
        <OperateWrapper className="operate" onClick={goPrev}>
          <Operate className="iconfont">&#xe744;</Operate>
        </OperateWrapper>
        <BannerWrapper>
          {banners.map(
            (
              {
                encodeId,
                imageUrl,
                titleColor,
                typeTitle,
                targetId,
                targetType,
                url,
              },
              index
            ) => {
              return (
                <>
                  <BannerItem
                    operate={operate}
                    key={index}
                    index={index}
                    onClick={(targetId, targetType) => showSongListDetail}
                  >
                    <BannerCover src={imageUrl} loading="lazy" alt="" />
                    <TypeTitle titleColor={titleColor}>{typeTitle}</TypeTitle>
                  </BannerItem>
                  <DotWraper>
                    <Dot onMouseEnter={(e) => selectDot}></Dot>
                  </DotWraper>
                </>
              )
            }
          )}
        </BannerWrapper>
        <OperateWrapper className="operate" onClick={goNext}>
          <Operate className="iconfont">&#xe743;</Operate>
        </OperateWrapper>
      </CarsouelMain>
    </CarsouelWrapper>
  )
}

export default Carsouel
