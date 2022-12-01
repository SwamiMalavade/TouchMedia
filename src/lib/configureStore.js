import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
    return store;
}

const store = configureStore();

export default store;