import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { actions } from '../redux/ducks/index.js';

export const useQuerySearched = () => {
  const dispatch = useDispatch()
  const querySearched = useSelector(state => state.querySearched);

  const setQuerySearched = useCallback(
    (query) => dispatch(actions.setQuerySearched(query)),
    [dispatch]
  )
  return {
    querySearched,
    setQuerySearched
  }
}