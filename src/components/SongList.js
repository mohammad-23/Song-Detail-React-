import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong, deleteSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return(
                <div className="item" key={song.title} style={{ margin: '0 10px'}}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
                        <button onClick={() => this.props.deleteSong(song.id)} className="ui button primary">Delete</button>            
                    </div>
                    <div className="ui">
                        {song.title}
                    </div>
                </div>
            )
        });
    }
    
    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong, deleteSong })(SongList);