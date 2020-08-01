export const createTask = payload => ({
  type: 'CREATE_TASK',
  payload,
});

export const deleteTask = payload => ({
  type: 'DELETE_TASK',
  payload,
});