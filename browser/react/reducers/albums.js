'use strict';

import { RECEIVE_ALBUMS } from '../constants';
import { convertAlbums } from '../converters';

const initialAlbums = [];

// set state.albums
// after getting array of new albums
// convert it and set current state.albums to action.albums (converted)
export default function albums (state = initialAlbums, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS: return action.albums.map(convertAlbums);
    default: return state;
  }
}