import {aptiApiSlice} from "@/redux/aptiApiSlice"
import {createSlice} from "@reduxjs/toolkit"

export const userApiSlice = aptiApiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => `/user/profile/`,
            keepUnusedDataFor: 5*60,
        }),
    })
})

// reducer

// hooks
export const {useGetUserProfileQuery} = userApiSlice; 

// selectors
export const selectUserProfile = userApiSlice.endpoints.getUserProfile.select({}); 