import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
     if(!this.props.song) {
        return <div>Song Detail</div>
     }
    
     return (
         <div>
            <h3>
             {this.props.song.title}
            </h3>
            <h3>
             {this.props.song.duration}
            </h3>
         </div>
     )   
    }
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);