import React from 'react';
import Player from "../components/Player";
import { mount, shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from "@material-ui/core/Typography";

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
    wrap.setProps({ playerInfo: newPlayerInfo, track });

    expect(wrap).toMatchSnapshot()
  });


  // it('render with true', () => {
  //   const wrap = mount(<Player playerInfo={playerInfo}/>);
  //   const newPlayerInfo = Object.assign({}, playerInfo);
  //   newPlayerInfo.isPlaying = true;
  //   wrap.setProps({ playerInfo: newPlayerInfo, track });
  //   wrap.update();
  //   expect(wrap.props().playerInfo.isPlaying).toEqual(true);
  //   // expect(wrap.find(Typography).findWhere((f) => f.prop('variant') === 'h5')).toHaveLength(1)
  //   expect(wrap.find({ variant: 'h5'})).toHaveLength(2)
  //   expect(wrap).toMatchSnapshot()
  // });
