import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

const logger = createLogger({ collapsed: true });

const middlewares = [
	thunkMiddleware,
	logger,
].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
	const currentState = initialState;
	// const currentState = read() || initialState;
	const store = createStoreWithMiddleware(rootReducer, currentState);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer);
		});
	}

	return store;
}
