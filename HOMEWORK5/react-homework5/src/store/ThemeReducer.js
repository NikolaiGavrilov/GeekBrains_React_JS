const TOGGLETHEME = "TOGGLE_THEME";

export const toggleTheme = () => ({ type: TOGGLETHEME });

const initialState = {
    theme: 'light',
    toggleTheme: () => { }
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLETHEME:
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
};
