import {createStore} from 'redux';
import rootReducer from './index';

export const configureStore = () => {
    return createStore(rootReducer)
}