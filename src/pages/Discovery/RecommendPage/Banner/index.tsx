import React from 'react';
import Carsouel from '../../../../components/Carsouel';
import { useQuery } from '@tanstack/react-query';
import { getBanner } from '../../../../api/banner';

const Banner = () => {
  const { isLoading, isError, data, error } = useQuery(['banner'], () => getBanner());
  if (isLoading) {
    return <span>loading...</span>;
  }
  return <Carsouel list={data} />;
};

export default Banner;
