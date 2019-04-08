const getImg300PX = url => url.slice(0,-13) + "300x300bb.jpg";

const createSongObject = (data, isFavorite) => data.map(song =>
  ({
    artistName: song.artistName,
    trackName: song.trackName,
    previewUrl: song.previewUrl,
    artworkUrl: getImg300PX(song.artworkUrl100),
    trackPrice: song.trackPrice,
    trackId: song.trackId,
    collectionName: song.collectionName,
    artistViewUrl: song.artistViewUrl,
    isFavorite
  })
);

 export default createSongObject
