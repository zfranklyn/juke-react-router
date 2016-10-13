'use strict';

import React from 'react';
import {Router, Link} from 'react-router';

export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <Link to="albums" activeClassName="active">
        <h4 className='menu-item'>
          ALBUMS
        </h4>
      </Link> 
    </section>
    <section>™
      <Link to="artists" activeClassName="active">
        <h4 className='menu-item'>
          ARTISTS
        </h4>
      </Link>
    </section>
  </sidebar>
);