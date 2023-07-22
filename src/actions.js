// actions.js
export const addHabit = (habit) => ({
  type: "ADD_HABIT",
  payload: habit,
});

export const updateHabitStatus = (habitId, status, date) => ({
  type: "UPDATE_HABIT_STATUS",
  payload: { habitId, status, date },
});

export const removeHabit = (habitId) => ({
  type: "REMOVE_HABIT",
  payload: habitId,
});
