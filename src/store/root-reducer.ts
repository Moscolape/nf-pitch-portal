// Import necessary functions and modules
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "@store/slice/sidebarText-slice"

// Combine multiple reducers into one root reducer
const rootReducer = combineReducers({
  sidebar: sidebarReducer, // Sidebar reducer
});

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Export the root reducer
export default rootReducer;