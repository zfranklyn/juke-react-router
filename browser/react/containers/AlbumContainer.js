'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import {fetchAndGoToAlbum} from '../action-creators/albums';



const mapStateToProps = ({ selectedAlbum},ownProps) => (
	{selectedAlbum}
);

const mapDispatchToProps = (dispatch,ownProps)=>{
	return ({
		// fetches specific album and sets state.currentAlbum to the result
		goToSpecificAlbum(id){
			dispatch(fetchAndGoToAlbum({id}));
		}

	})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
