import { configureStore } from '@reduxjs/toolkit'

import anketaFormReducer from './store/anketaFormReducer/anketaFormSlice'

export default configureStore({
  reducer: {
    anketaForm: anketaFormReducer,
  },
})