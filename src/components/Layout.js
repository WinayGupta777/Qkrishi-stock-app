import React from 'react'
import UrlBox from './UrlBox';
import { Divider } from '@mui/material';
import GraphContainer from './GraphContainer';

const Layout = () => {
  return (
    <>
        <UrlBox />
        <Divider />
        <GraphContainer />
    </>
  )
}

export default Layout;
