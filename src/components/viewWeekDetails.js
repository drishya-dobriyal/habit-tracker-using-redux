import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHabitStatus } from "../actions";
import "./viewWeekDetails.css";

const getTrackingDetails = function (count, dateObj, upto) {
  let curr = new Date();
  let i = 0;
  let result = [];
  while (i < count) {
    let dateStr = curr.toLocaleDateString();
    let status = dateObj[dateStr] ? dateObj[dateStr] : "skipped";
    result.push({ date: dateStr, status });
    if (new Date(upto).toLocaleDateString() === dateStr) break;
    curr.setDate(curr.getDate() - 1);
    i++;
  }
  return result;
};

const ViewWeekDetails = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  const handleStatusChange = (newStatus, habitId) => {
    const date = new Date().toLocaleDateString();
    dispatch(updateHabitStatus(habitId, newStatus, date));
  };

  return (
    <section id="view-week-details">
      {habits.map((habit) => (
        <div key={habit.id}>
          <h1>{habit.name}</h1>
          <ol className="view-week-details-container">
            {getTrackingDetails(7, habit.tracking, habit.createdAt).map((r) => (
              <div className="tracking-detail" key={r.date}>
                <p>{r.date}</p>
                <select
                  name="dropdown-status"
                  defaultValue={r.status}
                  onChange={(event) =>
                    handleStatusChange(event.target.value, habit.id)
                  }
                >
                  <option value="unfulfilled" label="Unfulfilled"></option>
                  <option value="fulfilled" label="Fulfilled"></option>
                  <option value="skipped" label="Skipped"></option>
                </select>
              </div>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default ViewWeekDetails;
