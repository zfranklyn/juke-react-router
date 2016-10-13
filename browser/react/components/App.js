'use strict';

import React, { Component } from 'react';

import SidebarContainer from '../containers/SidebarContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';
import ArtistsContainer from '../containers/ArtistsContainer';
import ArtistContainer from '../containers/ArtistContainer';
import PlayerContainer from '../containers/PlayerContainer';

export default class App extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { onLoad } = this.props;
    
    Promise
      .all([
        fetch('/api/albums').then(res => res.json()),
        fetch('/api/artists').then(res => res.json())
      ])
      .then(results => onLoad(...results));
  }

  render () {
    const { location } = this.props;

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <SidebarContainer />
        </div>
        <div className="col-xs-10">
          {
            (() => {
              switch (location) {
                case 'albums': return <AlbumsContainer />
                case 'artists': return <ArtistsContainer />
                case 'album': return <AlbumContainer />
                case 'artist': return <ArtistContainer /> 
              }
            })()
          }
        </div>
        <PlayerContainer />
      </div>
    );
  }
}
