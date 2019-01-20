export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const deleteSong = id => {
    return {
        type: 'DELETE_SONG',
        payload: id
    }
}

export const addSong = song => {
    return {
        type: 'ADD_SONG',
        payload: song
    }
}