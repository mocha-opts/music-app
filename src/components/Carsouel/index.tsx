import React, { useState, useEffect } from 'react';
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
  BannerWrapper
} from './style';
interface Carsouel {
  list: any;
}
const Carsouel = ({ list }: Carsouel) => {
  const [operate, setoperate] = useState({ front: 1, type: 'next', max: 0 });
  useEffect(() => {
    let timer = setInterval(() => goNext(), 3000);
    return () => clearInterval(timer);
  });
  const goPrev = () => {
    setoperate((prev) => {
      return {
        ...prev,
        front: prev.front === 0 ? list.length - 1 : prev.front - 1,
        type: 'prev',
        max: list.length
      };
    });
  };
  const goNext = () => {
    setoperate((prev) => {
      return {
        ...prev,
        front: prev.front === list.length - 1 ? 0 : prev.front + 1,
        type: 'next',
        max: list.length
      };
    });
  };
  const showSongListDetail = () => {};
  const selectDot = () => {};
  console.log(operate);
  return (
    <CarsouelWrapper>
      <CarsouelMain>
        <OperateWrapper className="operate" onClick={goPrev}>
          <Operate className="iconfont">&#xe744;</Operate>
        </OperateWrapper>
        <BannerWrapper>
          {list?.map(({ encodeId, imageUrl, titleColor, typeTitle, targetId, targetType, url }, index) => {
            return (
              <>
                <BannerItem
                  operate={operate}
                  key={index}
                  index={index}
                  onClick={(targetId, targetType) => showSongListDetail}
                >
                  <BannerCover src={imageUrl} loading="lazy" alt="" />
                  <TypeTitle color={titleColor}>{typeTitle}</TypeTitle>
                </BannerItem>
                <DotWraper>
                  <Dot onMouseEnter={(e) => selectDot}></Dot>
                </DotWraper>
              </>
            );
          })}
        </BannerWrapper>
        <OperateWrapper className="operate" onClick={goNext}>
          <Operate className="iconfont">&#xe743;</Operate>
        </OperateWrapper>
      </CarsouelMain>
    </CarsouelWrapper>
  );
};

export default Carsouel;
