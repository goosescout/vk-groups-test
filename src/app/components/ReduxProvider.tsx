/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react"

import { Provider } from "react-redux"

import { makeReduxStore, RootState } from "@/store/store"

interface ReduxProviderProps {
  children: React.ReactNode
  redux?: RootState
}

export default function ReduxProvider({
  children,
  redux = undefined,
}: ReduxProviderProps) {
  const store = useMemo(() => {
    const instance = makeReduxStore(redux)

    return instance
  }, [])

  return <Provider store={store}>{children}</Provider>
}
