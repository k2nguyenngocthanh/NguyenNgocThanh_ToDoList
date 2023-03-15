import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../../types/ToDoListType";

export const addTaskAction = (newTask) => {
  return {
    type: add_task,
    newTask,
  };
};


export const changeThemeAction = (themeId) => {
  return {
    type: change_theme,
    themeId,
  };
}; 

export const donetaskAction=(taskId) =>({
  type:done_task,
  taskId

})

export const deletetaskAction=(taskId) =>({
  type:delete_task,
  taskId

})

export const edittaskAction=(task) =>({
  type:edit_task,
  task

})

export const updateTaskAction=(taskName) =>({
  type:update_task,
  taskName

})
