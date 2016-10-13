'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

class Album extends React.Component{

	componentDidMount(){
		let id = this.props.params.albumId; // passed in from Router
		this.props.goToSpecificAlbum(id);
	}

	render(){

		const { selectedAlbum } = this.props;

		return(
			  <div className="album">
			    <div>
			      <h3>{ selectedAlbum.name }</h3>
			      <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
			    </div>
			    <SongsContainer songs={selectedAlbum.songs} />
			  </div>

			)

	}


}

export default Album;