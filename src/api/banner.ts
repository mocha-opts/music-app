import { GetBannerReq } from '../types/api/banner';
import { DeviceTypeEnum } from './../types/common/DeviceTypeEnum';
import { Banner, GetBannerRsp } from '../types/api/banner';
import axios from '../utils/request';
export const getBanner = async (
  params = {
    type: DeviceTypeEnum.PC
  }
) => {
  const response: GetBannerRsp = await axios.get('/banner', {
    params
  });
  console.log(response, 'banner');
  return response.banners;
};
