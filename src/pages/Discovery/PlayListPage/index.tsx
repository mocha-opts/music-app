import React, { useEffect, useState } from 'react';
import { getPersonalizedSongList } from '../../../api/personalized';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
const SongList: React.FC = () => {
  const { data: songList, isLoading } = useQuery(['personalized'], () => getPersonalizedSongList({ limit: 10 }));
  if (isLoading) {
    return <Spin />;
  }
  return <div>{songList}</div>;
};

export default SongList;
