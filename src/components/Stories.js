import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesAction } from '../actions/index';

function Stories(props) {
  if (props.loading) return <p>Please wait!</p>;

  return (
    <div>
      <button type="button" onClick={props.loadStories}>Load top 5 stories</button>
      {/*<button type="button" onClick={props.clear}>Clear</button>*/}
      <StoryList {...props} />
    </div>
  );
}

function StoryList(props) {
  if (props.stories.length === 0) return null;
  else {
    return (
      <div>
        {props.stories.map((item) => <Story {...item} key={item.id} />)}
      </div>
    );
  }
}

function Story(props) {
  return <p>{props.title}</p>
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(fetchStoriesAction()),
    // clear: () => dispatch(clear()),
  }
}

export default connect(mapState, mapDispatch)(Stories);