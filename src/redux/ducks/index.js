export const actionTypes = {
    ADD_TRACK: "ADD_TRACK",
    RESET_SELECTED_TRACK:"RESET_SELECTED_TRACK",
    RESET_TRACKS: "RESET_TRACKS",
    SET_DATA: "SET_DATA",
    SET_PLAY: "SET_PLAY",
    SET_QUERY: "SET_QUERY",
    SET_QUERYSEARCHED: "SET_QUERYSEARCHED",
    SET_SELECTED_TRACK:"SET_SELECTED_TRACK",
    SET_TRACKS: "SET_TRACKS",
    TOGGLE_PLAY: "TOGGLE_PLAY",
  };
  
export const actions = {
    addTrack: (track) => ({type: actionTypes.ADD_TRACK, payload:track}),
    resetSelectedTrack: () => ({type: actionTypes.RESET_SELECTED_TRACK}),
    resetTracks: () => ({type: actionTypes.RESET_TRACKS}),
    setData: (data) => ({type: actionTypes.SET_DATA, payload:data}),
    setPlay: () => ({type: actionTypes.SET_PLAY}),
    setQuery: (query) => ({type: actionTypes.SET_QUERY, payload:query}), 
    setQuerySearched: () => ({type: actionTypes.SET_QUERYSEARCHED}), 
    setSelectedTrack: (index) => ({type: actionTypes.SET_SELECTED_TRACK, payload:index}),
    togglePlay: () => ({type: actionTypes.TOGGLE_PLAY}),
 };

 const initialState = {
    data: null, playing: false, query: '', querySearched:'bobo', tracks: [],
    selectedTrack: 0
  };

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRACK:
        return { ...state, tracks: [...state.tracks, action.payload]};
        case actionTypes.RESET_SELECTED_TRACK:
        return { ...state, selectedTrack:0 };
        case actionTypes.RESET_TRACKS:
        return { ...state, tracks:[] };
        case actionTypes.SET_DATA:
        return { ...state, data:action.payload };
        case actionTypes.SET_PLAY:
        return { ...state, playing:true };
        case actionTypes.SET_QUERY:
        return { ...state, query:action.payload };
        case actionTypes.SET_QUERYSEARCHED:
        return { ...state, querySearched:state.query};  
        case actionTypes.SET_SELECTED_TRACK:
        return { ...state, selectedTrack:action.payload };
        case actionTypes.TOGGLE_PLAY:
        return { ...state, playing:!state.playing };
        default:
        return state;
    }
};