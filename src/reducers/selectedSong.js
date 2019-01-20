export default function (selectedSong=null, action) {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
}
