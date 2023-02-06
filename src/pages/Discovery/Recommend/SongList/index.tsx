import React, { useEffect, useState } from 'react';
import { getPersonalizedSongList } from '../../../../api/personalized';
import {
  SubTitle,
  ArrowIcon,
  SongListWrapper,
  SongListItem,
  Cover,
  Container,
  Description,
  PlayIcon,
  PlayCount
} from './style';
import { formatPlayCount } from '../../../../utils/format';
import { Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Personalized } from '../../../../types/api/personalized';
/**
 *alg: "featured"
 *canDislike: false
 *copywriter: "编辑推荐：越想忘记，就记得越清晰↵"
 *highQuality: false
 *id: 6710666656
 *name: "你呢 你走出来了吗 愿意接受新的人了吗"
 *picUrl: "https://p2.music.126.net/EK7zI0oZs_lWmeaQgnoNbw==/109951165888591543.jpg"
 *playCount: 446068
 *trackCount: 46
 *trackNumberUpdateTime: 1618328965529
 *type: 0
 *alg: "cityLevel_unknow"

 *canDislike: true
 *copywriter: "热门推荐"
 *highQuality: false
 *id: 5051447966
 *name: "神仙翻唱 | 这些翻唱这么火大概就是好听吧"
 *picUrl: "https://p2.music.126.net/ns0C_DgZp8SAxwWLjtJ_7Q==/109951165137169029.jpg"
 *playCount: 7856365
 *trackCount: 63
 *trackNumberUpdateTime: 1617005638707
 *type: 0
 * @return {*}
 */
const SongList = () => {
  const { data: songList, isLoading } = useQuery(['personalized'], () => getPersonalizedSongList({ limit: 10 }));
  if (isLoading) {
    return <Spin />;
  }
  return (
    <>
      <SubTitle>
        推荐歌单
        <ArrowIcon className="iconfont">&#xe743;</ArrowIcon>
      </SubTitle>
      <SongListWrapper>
        {songList.map(
          ({
            id,
            name,
            alg,
            canDislike,
            copywriter,
            highQuality,
            picUrl,
            playCount,
            trackCount,
            trackNumberUpdateTime,
            type
          }: Personalized) => {
            return (
              <SongListItem key={id}>
                <Container>
                  <Cover src={picUrl} loading="lazy" alt="" />

                  <PlayCount>
                    <i className="iconfont play-arrow">&#xe68b;</i>
                    {formatPlayCount(playCount)}
                  </PlayCount>
                  <PlayIcon className="iconfont icon-show">&#xe72f;</PlayIcon>
                </Container>
                <Description>{name}</Description>
              </SongListItem>
            );
          }
        )}
      </SongListWrapper>
    </>
  );
};

export default SongList;
