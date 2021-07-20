import * as api from "../api";
import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

// Action creators and we use async data !

export const getPosts = async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    console.log("FETCH ALL", data);
    dispatch(action);
    // return action;
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE , payload: data });
    console.log("CREATE", data);
  } catch (err) {
    console.log("err creating", err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("error", error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
