import React from 'react';
import Song from './Song';

const SongList = (props) => {
  const songNodes = props.data.map((song) => {
    return (
      <Song
        key={ song._id }
        uniqueId={ song._id }
        title={ song.title }
        artist={ song.artist }
        url={ song.url }
        onSongDelete={ props.onSongDelete }
        onSongUpdate={ props.onSongUpdate } />
    );
  });

  return (
    <div id='SongList'>
      { songNodes }
    </div>
  );
};

export default SongList;
