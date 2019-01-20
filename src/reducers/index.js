import { combineReducers } from 'redux';
import selectSongReducer from './selectedSong';
import songsReducer from './allReducer';



export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});