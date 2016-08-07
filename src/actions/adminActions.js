import * as types from './actionTypes';
// import { push } from 'react-router-redux';

import axios from 'axios';

export function attempt_get_users() {
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    console.log("attempting to get users");
    axios({
      method: 'post',
      url: '/api/v1/getUsers',
      headers: {
        'x-access-token': getState().authentication.token
      }
    })
    .then(function (response) {
      console.log("get_users reponse");
      console.log(response);
      if(response.data.success){
        dispatch(get_users_success(response.data.users));
      }else{
        dispatch(get_users_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error get_users: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function get_users_success(users){
  return {
    type: types.GET_USERS_SUCCESS,
    success: true,
    users: users
  };
}

export function get_users_failure(error){
  return {
    type: types.GET_USERS_FAILURE,
    success: false,
    error: error
  };
}
