import React, { ReactChild } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilProvider = ({ children }: { children: ReactChild }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
