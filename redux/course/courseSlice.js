import { aptiApiSlice } from "@/redux/aptiApiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const courseApiSlice = aptiApiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getMasterCourses: builder.query({
      query: () => `/master/course/`,
    }),
    getSubjects: builder.query({
      query: (course_id) => `/course/${course_id}/subject/`,
    }),
  }),
});

export const courseSlice = createSlice({
  name: "course",
  initialState: { courseId: "6770f30e-42a1-4194-a419-407b63ea1585" },
  // reducers: {
  //   setCourse: (state, action) => {
  //     state.course = action.payload;
  //   }
  // },
});

// Reducer
export default courseSlice.reducer;

// Query hooks
export const { useGetMasterCoursesQuery, useLazyGetSubjectsQuery } = courseApiSlice;

// Selectors

// Actions
export const {} = courseSlice.actions;
