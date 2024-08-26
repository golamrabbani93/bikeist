import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export interface ThemeState {
	theme: 'light' | 'dark';
}

const initialState: ThemeState = {
	theme: 'light', // Default to 'light' theme
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';

			if (state.theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		},
	},
});

export const {toggleTheme} = themeSlice.actions;
export const getCurrentTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
