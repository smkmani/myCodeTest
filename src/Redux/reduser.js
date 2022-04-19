import {
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  CHANGE_TASK_REQUEST,
  CHANGE_TASK_SUCCESS,
  ADD_TASK_FAILURE,
} from "./constant";

const initialState = {
  isActive: false,
  toToList: {
    backlog: [],
    todo: [],
    inprogress: [],
    complete: [],
  },
};
// {...toDoState.toToList[strStatus]}
// eslint-disable-next-line import/no-anonymous-default-export
export default (
  toDoState = initialState,
  { type, payLoad, successData, error, movedItem }
) => {
  switch (type) {
    case ADD_TASK_REQUEST:
      const { id, title, desCription, status } = payLoad || {};
      const strStatus = (status) ? status.toLowerCase() : null;
      return {
        ...toDoState,
        toToList: {
          ...toDoState.toToList,
          [strStatus]: [
            { id, title, desCription },
            ...toDoState.toToList[strStatus],
          ],
        },
        isActive: true,
      };
    case ADD_TASK_SUCCESS:
      return { ...toDoState, isActive: false, cardData: successData };
    case CHANGE_TASK_REQUEST:
      const { tId, moveTo, cStatus } = movedItem || {};
      const {toToList} = toDoState || {};
      const getMovedItem = toToList[cStatus].filter((fVal)=> fVal.id === tId);
      const getRemovedItem = toToList[cStatus].filter((fVal)=> fVal.id !== tId);
      return {
        ...toDoState,
        toToList: {
          ...toDoState.toToList,
          [moveTo]: [
            ...getMovedItem,
            ...toDoState.toToList[moveTo],
          ],
          [cStatus]: [...getRemovedItem],
        },
        isActive: true,
      };
    case CHANGE_TASK_SUCCESS:
      return { ...toDoState, isActive: false, cardData: successData };
    case ADD_TASK_FAILURE:
      return { ...toDoState, isActive: false, cardData: error };
    default:
      return toDoState;
  }
};
