import React from 'react';

const Song = (props) => {
  return (
    <div>
      <h2>{ props.title } - { props.artist }</h2>
      <h3>{ props.url }</h3>
    </div>
  );
};

export default Song;