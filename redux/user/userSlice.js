import {aptiApiSlice} from "@/redux/aptiApiSlice"
import {createSlice} from "@reduxjs/toolkit"

export const userApiSlice = aptiApiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => `/user/profile/`,
        }),
    })
})

// reducer

// hooks
export const {useGetUserProfileQuery} = userApiSlice; 

// selectors
export const selectUserCourses = (state) => state.api.queries;