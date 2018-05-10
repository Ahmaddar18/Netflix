export function SciFi() {
    return dispatch => {
      dispatch({
        type: "SCI_FI",
        payload: true
      });
    };
  }

  export function MostWatched() {
    return dispatch => {
      dispatch({
        type: "MOST_WATCHED",
        payload: true
      });
    };
  }

  export function TopTv() {
    return dispatch => {
      dispatch({
        type: "TOPTV",
        payload: true
      });
    };
  }

  export function Trending() {
    return dispatch => {
      dispatch({
        type: "TRENDING",
        payload: true
      });
    };
  }

  export function Search() {
    return dispatch => {
      dispatch({
        type: "SEARCH",
        payload: true
      });
    };
  }