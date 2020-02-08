export default (state = {}, action) => {
    switch (action.type) {
      case 'DATA_UPDATED':
      return {
        result: action.data
      }
      default:
      return state
    }
  }