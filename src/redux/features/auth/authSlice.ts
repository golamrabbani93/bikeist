import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export type TUser = {
	userId: string;
	role: string;
	iat: number;
	exp: number;
};
type TinitialState = {
	user: null | TUser;
	token: null | string;
};
const initialState: TinitialState = {
	user: null,
	token: null,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<TinitialState>) => {
			const {user, token} = action.payload;
			state.user = user;
			state.token = token;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const {setUser, logOut} = authSlice.actions;
export const getCurrentToken = (state: RootState) => state.auth.token;
export const getCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
