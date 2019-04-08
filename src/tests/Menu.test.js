import React from 'react';
import Menu from "../components/Menu";
import SwipeableTemporaryDrawer from "../redux/containers/SwipeableTemporaryDrawer"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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
const history = {location: {pathname: ""}};

let shallow;
let classes;

beforeAll(() => {
  shallow = createShallow({ dive: true });
  classes = getClasses(<Menu history={history}/>);
});

it('renders without crashing', () => {
  const wrap = shallow(<Menu history={history}/>);
  expect(wrap).toMatchSnapshot()
});

it('change state', () => {
  const wrap = shallow(<Menu history={history}/>);
  expect(wrap.state().isOpen).toEqual(false);
  wrap.find(IconButton).simulate("click");
  expect(wrap.state().isOpen).toEqual(true);
});

it('is correct title for SearchingPage', () => {
  const wrap = shallow(<Menu history={history}/>);
  expect(wrap.find(Typography).dive().dive().text()).toEqual("Searching page")
});

it('is correct title for FavoritePage', () => {
  const favoriteHistory = {location: {pathname: "/favorites"}};
  const wrap = shallow(<Menu history={favoriteHistory}/>);
  expect(wrap.find(Typography).dive().dive().text()).toEqual("Favorite songs")
});

it('doesnt showing searching field for FavoritePage', () => {
  const favoriteHistory = {location: {pathname: "/favorites"}};
  const wrap = shallow(<Menu history={favoriteHistory}/>);
  expect(wrap.find(`.${classes.search}`)).toHaveLength(0);
});

it('showing searching field for SearchingPage', () => {
  const wrap = shallow(<Menu history={history}/>);
  expect(wrap.find(`.${classes.search}`)).toHaveLength(1);
});
