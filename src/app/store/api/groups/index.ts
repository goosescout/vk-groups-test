import { GetGroupsResponse } from "./types"

import baseApi from "@/store/api/base"

const groupsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getGroups: builder.query<GetGroupsResponse, void>({
      queryFn: async (_args, _, _options, baseQuery) => {
        await new Promise(resolve => setTimeout(resolve, 1000)) // fake 1 second delay
        const { data } = await baseQuery("/groups.json")
        return { data: data as GetGroupsResponse }
      },
    }),
  }),
})

export default groupsApi

export const { useGetGroupsQuery } = groupsApi
