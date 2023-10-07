// Creamos el STORE DE LA APLIACION y le damos el `rootReducer` -> este es un STORE asociado a un reducer.
import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga';
// esta es un funcion que nos permite ver en formato JSON los estado de nuestra app.
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../store/sagas/sagas";

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());
    return store;
};
// Ahora este store se tiene que pasar como un contexto a toda la aaplicacion.


export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware), 
            composeWithDevTools()
        )
    );
    // Inicializamos el watcher saga
    sagaMiddleware.run(watcherSaga);

    return store;
}