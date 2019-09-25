import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
	render() {
		return <div>SongList</div>;
	}
}

// Return an object as props on Component in connect param
const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
