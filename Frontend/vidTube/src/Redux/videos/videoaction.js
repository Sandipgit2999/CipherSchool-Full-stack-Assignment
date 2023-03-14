import axios from "axios";
import * as types from "./videoactiontype";

export const getVideos = () => async (dispatch) => {
  dispatch({ type: types.GET_VIDEOS_REQUEST });
  return axios
    .get(`http://localhost:8080/videos`)
    .then((r) => {
      //console.log(r.data,"dkdkkdk");
      dispatch({ type: types.GET_VIDEOS_SUCCESS, payload: r.data });
    })
    .catch(() => dispatch({ type: types.GET_VIDEOS_FAILURE }));
};

// export const getCards = () => async (dispatch) => {
//     dispatch({ type: types.GET_CARDS_REQUEST });
//     return axios
//       .get(`http://localhost:8080/cards`)
//       .then((r) => {
//         console.log(r.data);
//         dispatch({ type: types.GET_CARDS_SUCCESS, payload: r.data });
//       })
//       .catch(() => dispatch({ type: types.GET_CARDS_FAILURE }));
//   };

export const getcurrVideos = (_id) => async (dispatch) => {

  console.log(_id,"didkdk")
  return axios
    .get(`http://localhost:8080/videos/${_id}`)
    .then((res) => {
      //console.log(res);
      dispatch({ type: types.GET_CURRVIDEO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
