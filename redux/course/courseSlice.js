import { aptiApiSlice } from "@/redux/aptiApiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const courseApiSlice = aptiApiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => {
    // console.log(builder);
    return {
      getCourseDetail: builder.query({
        query: (courseId) => `/course/${courseId}/`,
      }),
      getCourseSubjects: builder.query({
        query: (courseId) => `/course/${courseId}/subject/`,
      }),
      getSubjectModules: builder.query({
        query: (courseId, subjectId) =>
          `/course/${courseId}/subject/${subjectId}/module/`,
      }),
      getModuleTopics: builder.query({
        query: (courseId, subjectId, moduleId) =>
          `/course/${courseId}/subject/${subjectId}/module/${moduleId}/topic/`,
      }),
      getTopicLectures: builder.query({
        query: (courseId, subjectId, moduleId, topicId) =>
          `/course/${courseId}/subject/${subjectId}/module/${moduleId}/topic/${topicId}/lecture/`,
      }),
    };
  },
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
export const {
  useGetCourseDetailQuery,
  useGetCourseSubjectsQuery,
  useGetSubjectModulesQuery,
  useGetModuleTopicsQuery,
  useGetTopicLecturesQuery,
} = courseApiSlice;

// Selectors
export const selectCourseId = (state) => state.course.courseId;
export const selectCourse = (state) => state.course.course;
export const selectCourseSubjects = (state) => state.course.subjects;


// Actions
export const {} = courseSlice.actions;
