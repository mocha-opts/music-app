import React from 'react';
import SongList from './SongList';
import Banner from './Banner';
import { RecommendContainer } from './style';
const RecommendPage = () => {
  return (
    <RecommendContainer>
      <Banner />
      <SongList />
    </RecommendContainer>
  );
};

export default RecommendPage;
