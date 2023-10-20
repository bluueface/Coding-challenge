import React from 'react';

const Loading: React.FunctionComponent = () => {
  return (
    <div className="layout margin-top">
      <img src={require('../../assets/loading.gif')} alt="loading..." />
    </div>
  );
};
export default Loading;
