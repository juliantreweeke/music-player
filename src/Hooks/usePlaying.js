import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { actions } from '../redux/ducks/index.js';
export const usePlaying = () => {
  const dispatch = useDispatch()
  const playing = useSelector(state => state.playing);
  const audioElement = useSelector(state => state.audioElement);
  
  const togglePlay = useCallback(
    () => dispatch(actions.togglePlay()),
    [dispatch]
  )

  const setPlay = useCallback(
    () => dispatch(actions.setPlay()),
    [dispatch]
  )

  return {
    audioElement,
    setPlay,
    playing,
    togglePlay
  }
}