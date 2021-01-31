import '../../global.scss';
import React, { FC } from 'react';
import Header from '@components/header';

const Layout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
