// tabSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
export type Tab = '1' | '2';

// Define the state shape for tab management
export interface TabState {
	activeTab: Tab;
}

const initialState: TabState = {
	activeTab: '2', // Set default tab here
};

const tabSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		setActiveTab(state, action: PayloadAction<Tab>) {
			state.activeTab = action.payload;
		},
	},
});

export const {setActiveTab} = tabSlice.actions;
export const getCurrentTab = (state: RootState) => state.tab.activeTab;
export default tabSlice.reducer;
