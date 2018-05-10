export default function moviesReducer(state = {


    //mine
      movieslist:"",

  }, action) {

switch (action.type) {
case "SEARCH":
state = {...state, movieslist : action.payload};
break;

/////////////Top TV picks
case "TOPTV":

state = {...state, movieslist: action.payload};
break;

/////////////Trending
case "TRENDING":

state = {...state, movieslist: action.payload};
break;

///////////// Most watched
case "MOST_WATCHED":

state = {...state, movieslist: action.payload};
break;

///////////// Sci-Fi
case "SCI_FI":

state = {...state, movieslist: action.payload};
break;

}
return state;
}
