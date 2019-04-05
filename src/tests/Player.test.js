import React from 'react';
import Player from "../components/Player";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import Pause from "@material-ui/core/SvgIcon/SvgIcon";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


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
const playerInfo = {
  trackLink: "previewUrl",
  trackId: "trackId",
  artistName: "artistName",
  trackName: "trackName",
  playlist: [song, song],
  index: 1,
  next: 2,
  isPlaying: false,
  previous: 0
};

let shallow;
let classes;

beforeAll(() => {
  shallow = createShallow({ dive: true });
  classes = getClasses(<Player />);
});

it('renders without crashing', () => {
  const wrap = shallow(<Player playerInfo={playerInfo}/>);
  expect(wrap).toMatchSnapshot()
});

it('renders with play button', () => {
  const wrap = shallow(<Player playerInfo={playerInfo}/>);
  expect(wrap.find(PlayArrowIcon)).toHaveLength(1);
  expect(wrap.find({"aria-label": "Pause"})).toHaveLength(0);
});

it('renders with pause button', () => {
  const newProps = Object.assign({}, playerInfo);
  newProps.isPlaying = true;

  const wrap = shallow(<Player playerInfo={newProps}/>);
  expect(wrap.find(PlayArrowIcon)).toHaveLength(0);
  expect(wrap.find({"aria-label": "Pause"})).toHaveLength(1);
});

it('renders with correct title', () => {
  const wrap = shallow(<Player playerInfo={playerInfo}/>);
  expect(wrap.find({name: "artistName"})).toHaveLength(1);
  expect(wrap.find({name: "artistName"}).dive().dive().text()).toEqual(playerInfo.artistName);
  expect(wrap.find({name: "trackName"}).dive().dive().text()).toEqual(playerInfo.trackName);
});
