'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchAndGoToArtist } from '../action-creators/artists';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = (dispatch) =>{
return ({
		// fetches specific album and sets state.currentAlbum to the result
		goToSpecificArtist(id){
			dispatch(fetchAndGoToArtist({id}));
		}
	})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);