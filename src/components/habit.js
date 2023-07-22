import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, updateHabitStatus } from "../actions";
import "./habit.css";

export const Habit = () => {
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  const handleStatusChange = (newStatus, habitId, habit) => {
    const date = new Date().toLocaleDateString();
    dispatch(updateHabitStatus(habitId, newStatus, date));
  };

  const handleAddHabit = () => {
    if (habitName.trim() === "") return;
    dispatch(
      addHabit({
        id: Date.now(),
        name: habitName,
        tracking: {},
        createdAt: new Date().toLocaleDateString(),
      })
    );
    setHabitName("");
  };

  return (
    <section className="habits-container">
      <input
        id="habit-input"
        placeholder="Add new habit..."
        value={habitName}
        onChange={(e) => {
          setHabitName(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddHabit();
        }}
      />
      {habits.map((habit) => (
        <div className="habit-card" id={habit.id} key={habit.id}>
          <div className="habit-detail">
            <div className="habit-title">{habit.name}</div>
          </div>
          <div className="habit-status">
            <p id="status">Status</p>
            <select
              name="dropdown-status"
              id="dropdown-status"
              defaultValue={
                habit.tracking[new Date().toLocaleDateString()]
                  ? habit.tracking[new Date().toLocaleDateString()]
                  : "skipped"
              }
              onChange={(event) =>
                handleStatusChange(event.target.value, habit.id, habit)
              }
            >
              <option value="unfulfilled" label="Unfulfilled"></option>
              <option value="fulfilled" label="Fulfilled"></option>
              <option value="skipped" label="Skipped"></option>
            </select>
          </div>
        </div>
      ))}
    </section>
  );
};
