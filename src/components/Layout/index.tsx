import React, { memo, Fragment } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { ContentWrapper, RightContent } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <RightContent>{children}</RightContent>
        <Footer />
      </ContentWrapper>
    </Fragment>
  );
};

export default Layout;
