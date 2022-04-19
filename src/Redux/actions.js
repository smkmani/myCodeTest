import {
    ADD_TASK_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    CHANGE_TASK_REQUEST,
    CHANGE_TASK_SUCCESS,
  } from './constant';
  
  export function addTaskRequest(payLoad) {
    return {
      type: ADD_TASK_REQUEST,
      payLoad,
    };
  }
  
  export function addTaskSuccess(successData) {
    return {
      type: ADD_TASK_SUCCESS,
      successData,
    };
  }

  export function changeTaskRequest(movedItem) {
    return {
      type: CHANGE_TASK_REQUEST,
      movedItem,
    };
  }
  
  export function changeTaskSuccess(successData) {
    return {
      type: CHANGE_TASK_SUCCESS,
      successData,
    };
  }
  
  export function addTaskFailure(error) {
    return {
      type: ADD_TASK_FAILURE,
      error,
    };
  }