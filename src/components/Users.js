import React from 'react';
import { connect } from 'react-redux';
import { fetchUserAction } from '../actions/index';

function Users(props) {
  return (
    <div>
      <ul>
        <div>
          {props.users.map((login) =>
            <li key={login}>
              {login}
              <button type="button" onClick={() => props.loadUser(login)}>Load user</button>
            </li>
          )}
        </div>
      </ul>
      {props.loading && <p>Please wait!</p>}
      {props.current && <User {...props.current} />}
    </div>
  );
}

function User(props) {
  return (
    <div>
      {props.id}: {props.login}
    </div>
  );
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadUser: (login) => dispatch(fetchUserAction(login))
  }
}

export default connect(mapState, mapDispatch)(Users);