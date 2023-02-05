import axios from '../utils/request';

export const getPersonalizedSongList = async ({ limit }: { limit: number }) => {
  const response = await axios({
    url: '/personalized',
    params: {
      limit
    }
  });
  return response.result || [];
};

export const getPersonalizedNewMusic = async () => {
  const response = await axios({
    url: '/personalized/newsong'
  });

  return response.result;
};

export const getPersonalizedMV = async () => {
  const response = await axios({
    url: '/personalized/mv'
  });

  return response.result;
};

export const getBanner = async () => {
  const response = await axios({
    url: '/banner',
    params: {
      type: 0
    }
  });
  console.log(response, 'banner');
  return response.banners;
};
