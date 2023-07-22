// reducers.js
const initialState = {
  habits: [
    {
      id: 1690022849298,
      name: "Habit 1",
      tracking: {
        "7/22/2023": "unfullfilled",
        "7/21/2023": "fullfilled",
        "7/20/2023": "fullfilled",
        "7/18/2023": "unfullfilled",
      },
      createdAt: "7/01/2023",
    },
    {
      id: 1690022855538,
      name: "Habit 2",
      tracking: {
        "7/20/2023": "skipped",
      },
      createdAt: "7/20/2023",
    },
  ],
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
