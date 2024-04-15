import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './slice/UserSlice'
import CitiesSlice from './slice/CitiesSlice'

const store = configureStore({
    reducer: {
        Users : UserSlice,
        Cities: CitiesSlice,
    },
})

export default store