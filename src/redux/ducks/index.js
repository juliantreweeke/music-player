export const actionTypes = {
    RESET_TRACKS: "RESET_TRACKS",
    SET_DATA: "SET_DATA",
    SET_PLAY: "SET_PLAY",
    SET_QUERY: "SET_QUERY",
    SET_TRACKS: "SET_TRACKS",
    TOGGLE_PLAY: "TOGGLE_PLAY",
  };
  
export const actions = {
    resetTracks: () => ({type: actionTypes.RESET_TRACKS}),
    setData: (data) => ({type: actionTypes.SET_DATA, payload:data}),
    setPlay: () => ({type: actionTypes.SET_PLAY}),
    setQuery: (query) => ({type: actionTypes.SET_QUERY, payload:query}), 
    setTracks: (tracks) => ({type: actionTypes.SET_TRACKS, payload:tracks}),
    togglePlay: () => ({type: actionTypes.TOGGLE_PLAY}),
 };

 const initialState = {
    data: null, playing: false, query: '', tracks: []
  };

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_TRACKS:
        return { ...state, tracks:[] };
        case actionTypes.SET_DATA:
        return { ...state, data:action.payload };
        case actionTypes.SET_PLAY:
        return { ...state, playing:true };
        case actionTypes.SET_QUERY:
        return { ...state, query:action.payload };
        case actionTypes.SET_TRACKS:
        return { ...state, tracks:action.payload };
        case actionTypes.TOGGLE_PLAY:
        return { ...state, playing:!state.playing };
        default:
        return state;
    }
};