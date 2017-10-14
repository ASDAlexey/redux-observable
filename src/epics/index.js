import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_STORIES, fetchStoriesFullfillAction } from '../actions/index';

// function loadStoriesEpic(action$) {
//   return action$.ofType(LOAD_STORIES)
//     .switchMap(() => {
//       return Observable.of(clear()).delay(2000);
//     })
// }

// function fetchUserEpic(action$) {
//   return action$.ofType(FETCH_USER)
//     .switchMap(({ payload }) => {
//       return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
//         .map((user) => {
//           return fetchUserFulfilledAction(user);
//         })
//     })
// }

function fetchStoriesEpic(action$) {
  return action$.ofType(FETCH_STORIES)
    .switchMap(({ payload }) => {
      return Observable.ajax.getJSON(`http://jsonplaceholder.typicode.com/posts`)
        .map((user) => {
          return fetchStoriesFullfillAction(user.slice(0, payload));
        })
    })
}

export const rootEpic = combineEpics(fetchStoriesEpic);