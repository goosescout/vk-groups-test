import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  useStore,
} from "react-redux"

import { AppDispatch, RootState } from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = () => useStore<RootState>()
