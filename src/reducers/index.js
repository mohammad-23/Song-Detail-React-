import { combineReducers } from 'redux';
import selectSongReducer from './selectedSong';
import allReducer from './allReducer';



export default combineReducers({
    songs: allReducer,
    selectedSong: selectSongReducer
});