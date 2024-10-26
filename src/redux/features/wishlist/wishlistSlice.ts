// other imports

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TBike} from '../../../types';
import {RootState} from '../../store';

// initial state

export interface WishlistState {
	items: TBike[];
}

const initialState: WishlistState = {
	items: [],
};

// slice definition

const wishlistSlice = createSlice({
	name: 'wishlist',

	initialState,

	reducers: {
		addItem: (state, action: PayloadAction<TBike>) => {
			state.items.push(action.payload);
		},

		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item._id !== action.payload);
		},
	},
});

export const {addItem, removeItem} = wishlistSlice.actions;
export const getWishlistItems = (state: RootState) => state.wishlist.items;
export default wishlistSlice.reducer;
