import React, { FC } from 'react';
import CustomButton from '@components/button';
import Layout from '@containers/layout';

const IndexPage: FC = () => (
  <Layout>
    <div>hello from index page</div>
    <CustomButton />
  </Layout>
);

export default IndexPage;
