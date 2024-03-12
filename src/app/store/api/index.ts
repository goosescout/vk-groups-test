import baseApi from "@/store/api/base"

const reducers = {
  [baseApi.reducerPath]: baseApi.reducer,
}

export const middlewares = [baseApi.middleware] as const

export default reducers
