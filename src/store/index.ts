import {
    AnyAction,
    ThunkDispatch,
    TypedStartListening,
    combineReducers,
    configureStore,
    createListenerMiddleware,
  } from '@reduxjs/toolkit'
  import thunk from 'redux-thunk'
  
  import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
  
  
  const listenerMiddlewareInstance = createListenerMiddleware({
    onError: () => console.error,
  })
  
  const rootReducer = combineReducers({
  })
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
  })
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  export type AppStartListening = TypedStartListening<RootState, AppDispatch>
  
  export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening
  
  type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
  export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  
  export default store
  