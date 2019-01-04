import { put,takeEvery,all } from 'redux-saga/effects'

const delay=(ms)=>new Promise(res=> setTimeout(res,ms));

export function* helloSaga(){
    console.log('Hello Saga!');
}

export function* incrementASYNC(){
    yield delay(1000);
    yield put({type:'INCREMENT'})
}
export function* decrementASYNC(){
    yield delay(1000);
    yield put({type:'DECREMENT'})
}
export function* watchIncrementAsync(){
 yield takeEvery('INCREMENT_ASYNC',incrementASYNC);
 yield takeEvery('DECREMENT_ASYNC',decrementASYNC);

}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        
    ]
    )
}