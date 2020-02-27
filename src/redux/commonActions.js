import { actions } from '../redux/ducks/index';
import { store } from '../redux/store/index';

export const selectTrack = (i) => {
    store.dispatch(actions.setSelectedTrack(i));
    store.dispatch(actions.setPlay());
}