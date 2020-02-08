export default (state = {}, action) => {
    switch (action.type) {
      case 'QUERY_UPDATED':
      return {
        result: action.query
      }
      default:
      return state
    }
  }