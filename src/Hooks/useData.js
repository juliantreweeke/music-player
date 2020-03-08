import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { actions } from '../redux/ducks/index.js';

export const useData = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data);

  const setData = useCallback(
    (data) => dispatch(actions.setData(data)),
    [dispatch]
  )

  return {
    data,
    setData
  }
}