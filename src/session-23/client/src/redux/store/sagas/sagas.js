import { takeLatest, call, put } from 'redux-saga/effects';
import  axios from 'axios';
import { API_CALL_REQUEST } from '../../actions/AsyncActions';
// Watcher SAGA
//Listens the API_CALL_REQUEST

export function* watcherSaga() {
    // Listens the action & comienza a trabajar saga
    yield takeLatest(API_CALL_REQUEST, workerSaga);
};

// Worker SAGA
// Es llamado desde el watcher saga, hace el login y despacha una accion.
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHTTP(action.payload.request));
        // obtenemos el token de la respuesta.
        const token = response.data.token;

        yield put({
            type: action.payload.okAction,
            payload: {
                token: token,
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error,
            }
        })
    }
};

function fetchHTTP(request) {
    return function() {
        return (axios(request));
    }
};