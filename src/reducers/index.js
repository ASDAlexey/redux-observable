import { CLEAR_STORIES, LOAD_STORIES } from '../actions/index';

const stories = [
  {
    by: 'test by',
    id: 111111,
    title: 'test title 1',
    url: 'http://test.com'
  },
  {
    by: 'test by',
    id: 22222,
    title: 'test title 2',
    url: 'http://test.com'
  },
  {
    by: 'test by',
    id: 33333,
    title: 'test title 3',
    url: 'http://test.com'
  },
  {
    by: 'test by',
    id: 4444,
    title: 'test title 4',
    url: 'http://test.com'
  }
];

const initialState = {
  items: [],
};

export function storiesReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        items: stories.slice(),
      };
    case CLEAR_STORIES:
      return {
        items: [],
      };
    default:
      return state;
  }
}


export default storiesReducers;