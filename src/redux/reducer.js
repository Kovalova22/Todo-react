import * as ActionTypes from './ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return state.concat([action.data]);
    case ActionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case ActionTypes.EDIT_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, editing: !todo.editing } : todo));
    case ActionTypes.UPDATE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            name: action.data.newName,
            title: action.data.newTitle,
            description: action.data.newDescription,
            image: action.data.newImage,
            editing: !todo.editing,
          };
        } else return todo;
      });
    default:
      return state;
  }
};
export default reducer;
