// reducers.js
const initialState = {
  habits: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case "UPDATE_HABIT_STATUS":
      const { habitId, status, date } = action.payload;
      const updatedHabits = state.habits.map((habit) => {
        if (habit.id === habitId) {
          return {
            ...habit,
            tracking: {
              ...habit.tracking,
              [date]: status,
            },
          };
        }
        return habit;
      });
      return {
        ...state,
        habits: updatedHabits,
      };
    default:
      return state;
  }
};

export default reducer;
