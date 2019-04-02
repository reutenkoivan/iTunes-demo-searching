import React from 'react';
import Player from "../components/Player";
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const song = {
  artistName: "artistName",
  trackName: "trackName",
  previewUrl: "previewUrl",
  artworkUrl: "artworkUrl100",
  trackPrice: "trackPrice",
  trackId: "trackId",
  collectionName: "collectionName",
  artistViewUrl: "artistViewUrl",
  isFavorite: false
};
const playerInfo = {trackLink: "previewUrl",
  trackId: "trackId",
  artistName: "artistName",
  trackName: "trackName",
  playlist: [song, song],
  index: 1,
  next: 2,
  previous: 0
};
const track = {
  songs: [song],
  favorites: []
};

  it('renders without crashing', () => {
    const wrap = shallow(<Player/>);
    const newPlayerInfo = Object.assign({}, playerInfo);
    newPlayerInfo.isPlaying = false;

    wrap.setProps({ newPlayerInfo, track });

    expect(wrap).toMatchSnapshot()
  });

  //M6 19h4V5H6v14zm8-14v14h4V5h-4z

  it('render with true', () => {
    const wrap = shallow(<Player/>);
    const newPlayerInfo = Object.assign({}, playerInfo);
    newPlayerInfo.isPlaying = true;
    wrap.setProps({ newPlayerInfo, track });

    expect(wrap).toMatchSnapshot()
  })
