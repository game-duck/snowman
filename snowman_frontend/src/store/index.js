import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'user',
  storage: storageSession,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['users', 'triplog'],
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
