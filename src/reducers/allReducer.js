const songs =  [
        {title: 'Enter Sandman', duration: '5:43', id: '1'},
        {title: 'Wet Sand', duration: '4:48', id: '2'},
        {title: 'Havana Affair', duration: '2:20', id: '3'},
        {title: 'Smells Like Teen Spirit', duration: '3:43', id: '4'},
]


export default function (state = songs, action) {
    if(action.type === 'DELETE_SONG') {
        return state.filter(song => action.payload !== song.id);
    }
    
    return state;
}