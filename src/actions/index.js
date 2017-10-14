export const FETCH_STORIES = 'FETCH_STORIES';
export const FETCH_STORIES_FULFILLED = 'FETCH_STORIES_FULFILLED';

export function fetchStoriesAction(count = 5) {
  return {
    type: FETCH_STORIES,
    payload: count,
  }
}

export function fetchStoriesFullfillAction(stories) {
  return {
    type: FETCH_STORIES_FULFILLED,
    payload: stories,
  }
}

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export function fetchUserAction(login) {
  return {
    type: FETCH_USER,
    payload: login,
  }
}

export function fetchUserFulfilledAction(user) {
  return {
    type: FETCH_USER_FULFILLED,
    payload: user,
  }
}
