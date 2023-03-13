import * as types from "./videoactiontype";

const initial = {
  videos: [],
  currvid: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        videos: payload,
      };
    case types.GET_VIDEOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        videos: [],
      };

    case types.GET_CURRVIDEO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_CURRVIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currvid: payload,
      };

    case types.GET_CURRVIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        currvid: [],
      };

    default:
      return state;
  }
};
