import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../features/sidebar/sidebarReducer'

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  }
})