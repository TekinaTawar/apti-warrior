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
    getModules: builder.query({
      query: ({ courseId: course_id, subjectId: subject_id }) =>
        `/course/${course_id}/subject/${subject_id}/module/`,
    }),
    getTopics: builder.query({
      query: ({
        courseId: course_id,
        subjectId: subject_id,
        moduleId: module_id,
      }) =>
        `/course/${course_id}/subject/${subject_id}/module/${module_id}/topic/`,
    }),
    getLectures: builder.query({
      query: ({
        courseId: course_id,
        subjectId: subject_id,
        moduleId: module_id,
        topicId: topic_id,
      }) =>
        `/course/${course_id}/subject/${subject_id}/module/${module_id}/topic/${topic_id}/items/`,
    }),
  }),
});

export const courseSlice = createSlice({
  name: "course",
  initialState: {},
  // reducers: {
  //   setCourse: (state, action) => {
  //     state.course = action.payload;
  //   }
  // },
});

// Reducer
export default courseSlice.reducer;

// Query hooks
export const {
  useGetMasterCoursesQuery,
  useGetSubjectsQuery,
  useGetModulesQuery,
  useGetTopicsQuery,
  useGetLecturesQuery,
} = courseApiSlice;

// Selectors

// Actions
export const {} = courseSlice.actions;
