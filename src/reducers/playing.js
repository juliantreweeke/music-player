export default (state = {}, action) => {
  switch (action.type) {
    case 'PLAYING_UPDATED':
    return {
      result: action.playing
    }
    default:
    return state
  }
}