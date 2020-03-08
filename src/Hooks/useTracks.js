import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { actions } from '../redux/ducks/index.js';

export const useTracks = () => {
  const dispatch = useDispatch()
  const tracks = useSelector(state => state.tracks);
  const selectedTrack = useSelector(state => state.selectedTrack);

  const addTrack = useCallback(newTrack => dispatch(actions.addTrack(newTrack)), [
    dispatch,
  ])

  const resetSelectedTrack = useCallback(
    () => dispatch(actions.resetSelectedTrack()),
    [dispatch]
  )

  const setSelectedTrack = useCallback(
    (index) => dispatch(actions.setSelectedTrack(index)),
    [dispatch]
  )

  const resetTracks = useCallback(
    () => dispatch(actions.resetTracks()),
    [dispatch]
  )

  return {
    selectedTrack,
    tracks,
    resetTracks,
    addTrack,
    resetSelectedTrack,
    setSelectedTrack,
  }
}