import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  sidebarText: string;
}

const initialSidebarText = sessionStorage.getItem('sidebarText') || 'Dashboard';

const initialState: SidebarState = {
  sidebarText: initialSidebarText,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateSidebarText: (state, action: PayloadAction<string>) => {
      state.sidebarText = action.payload;
      sessionStorage.setItem('sidebarText', action.payload);
    },
    resetSidebarText: (state) => {
      state.sidebarText = 'Dashboard';
      sessionStorage.setItem('sidebarText', 'Dashboard');
    }
  }
});

export const { updateSidebarText, resetSidebarText } = sidebarSlice.actions;

export default sidebarSlice.reducer;