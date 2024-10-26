import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import themeReducer from './features/theme/themeSlice';
import tabReducer from './features/tab/tabSlice';
import wishlistReducer from './features/wishlist/wishlistSlice';
import {baseApi} from './api/baseApi';

import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
	persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		theme: persistedThemeReducer,
		wishlist: persistedWishlistReducer,
		tab: tabReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
