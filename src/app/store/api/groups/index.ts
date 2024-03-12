import { GetGroupsResponse } from "./types"

import baseApi from "@/store/api/base"

const groupsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getGroups: builder.query<GetGroupsResponse, void>({
      query: () => "/groups.json", // For demo purposes
    }),
  }),
})

export default groupsApi

export const { useGetGroupsQuery } = groupsApi
