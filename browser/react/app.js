'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';


// react router
import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render(
  <Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path='/' component={AppContainer}>
  			<Route path='/albums' component={AlbumsContainer} />
  				<Route path='/albums/:albumId' component={AlbumContainer} />
  			<Route path='/artists' component={ArtistsContainer} />
  				<Route path='/artists/:artistId' component={ArtistContainer} />
  		</Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);