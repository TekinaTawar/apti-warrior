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
    // getModules: builder.query({
    //   query: ({ courseId: course_id, subjectId: subject_id }) => `/course/${course_id}/subject/${subject_id}/module/`,
    // }),
    getModules: builder.query({
      query: ({courseId: course_id, selectedSubject: subject_id}) => {        
        console.log("🚀 ~ file: courseSlice.js:18 ~ course_id:", course_id)
        console.log("🚀 ~ file: courseSlice.js:18 ~ subject_id:", subject_id)
        return `/course/${course_id}/subject/${subject_id}/module/`
      },
    })

  }),
});

export const courseSlice = createSlice({
  name: "course",
  initialState: { },
  // reducers: {
  //   setCourse: (state, action) => {
  //     state.course = action.payload;
  //   }
  // },
});

// Reducer
export default courseSlice.reducer;

// Query hooks
export const { useGetMasterCoursesQuery, useGetSubjectsQuery, useGetModulesQuery } = courseApiSlice;

// Selectors

// Actions
export const {} = courseSlice.actions;
