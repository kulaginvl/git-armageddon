import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={920}
    height={200}
    viewBox="0 0 920 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="9" ry="9" width="920" height="200" />
  </ContentLoader>
);

export default Loader;
