import { aptiApiSlice } from "@/redux/aptiApiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const testApiSlice = aptiApiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getTestDetails: builder.query({
      query: (testId) => `/test/${testId}/`,
    }),
    submitTest: builder.mutation({
      query: (currentTestDetails) => {
        const questionsWithAnswer = currentTestDetails.questions.filter(
          (question) => question.answer_id
        );
        const answers = questionsWithAnswer.map((question) => ({
          question_id: question.id,
          answer_id: question.answer_id,
          is_flagged: question.is_flagged,
          is_attempted: question.is_attempted,
          is_skipped: question.is_skipped,
          solution_time: 0,
        }));

        return {
          url: `/test/${currentTestDetails.test_data.id}/submit/`,
          method: "POST",
          body: {
            answers: answers,
          },
        };
      },
    }),
    getTestResultDetails: builder.query({
      query: (test_result_id) => `/test/result/${test_result_id}/`,
    }),
  }),
});

export const testSlice = createSlice({
  name: "test",
  initialState: {
    currentTestDetails: null,
    currentQuestionIndex: 0,
  },
  reducers: {
    setCurrentTestDetails: (state, action) => {
      state.currentTestDetails = action.payload;
    },
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    toggleFlag: (state, action) => {
      state.currentTestDetails.questions[
        state.currentQuestionIndex
      ].is_flagged =
        !state?.currentTestDetails?.questions[state.currentQuestionIndex]
          .is_flagged;
    },
    setCurrentSkipped: (state, action) => {
      state.currentTestDetails.questions[
        state.currentQuestionIndex
      ].is_skipped = true;
      state.currentTestDetails.questions[
        state.currentQuestionIndex
      ].is_attempted = false;
      delete state.currentTestDetails.questions[state.currentQuestionIndex]
        .answer_id;
    },
    setCurrentAttempted: (state, action) => {
      state.currentTestDetails.questions[
        state.currentQuestionIndex
      ].is_attempted = true;
      state.currentTestDetails.questions[state.currentQuestionIndex].answer_id =
        action.payload;
    },
    setTestResult: (state, action) => {
      state.testResult = action.payload;
    },
  },
});

// Query hooks
export const { useGetTestDetailsQuery, useSubmitTestMutation, useGetTestResultDetailsQuery } = testApiSlice;

// Actions
export const {
  setCurrentTestDetails,
  setCurrentQuestionIndex,
  toggleFlag,
  setCurrentSkipped,
  setCurrentAttempted,
  setTestResult,
} = testSlice.actions;

// Selectors
export const selectCurrentTestDetails = (state) =>
  state.test.currentTestDetails;
export const selectCurrentQuestionIndex = (state) =>
  state.test.currentQuestionIndex;
export const selectTestResult = (state) => state.test.testResult;

// Reducer
export default testSlice.reducer;
