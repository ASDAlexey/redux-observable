import {
  FETCH_USER, FETCH_USER_FULFILLED,
  FETCH_STORIES, FETCH_STORIES_FULFILLED
} from '../actions/index';
//
// const stories = [
//   {
//     by: 'test by',
//     id: 111111,
//     title: 'test title 1',
//     url: 'http://test.com'
//   },
//   {
//     by: 'test by',
//     id: 22222,
//     title: 'test title 2',
//     url: 'http://test.com'
//   },
//   {
//     by: 'test by',
//     id: 33333,
//     title: 'test title 3',
//     url: 'http://test.com'
//   },
//   {
//     by: 'test by',
//     id: 4444,
//     title: 'test title 4',
//     url: 'http://test.com'
//   }
// ];

const initialState = {
  stories: [],
  users: [
    'substack',
    'ASDAlexey',
  ],
  current: null,
  loading: false,
};

export function storiesReducers(state = initialState, action) {
  switch (action.type) {
    // case LOAD_STORIES:
    //   return {
    //     items: stories.slice(),
    //   };
    // case CLEAR_STORIES:
    //   return {
    //     items: [],
    //   };
    case FETCH_STORIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STORIES_FULFILLED:
      return {
        stories: action.payload,
        loading: false,
      };
    case FETCH_USER:
      return {
        stories: action.payload,
        loading: false,
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}


export default storiesReducers;