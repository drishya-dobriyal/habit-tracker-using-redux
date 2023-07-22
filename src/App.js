import React from "react";
import { Routes, Route } from "react-router-dom";
import { Habit } from "./components/habit";
import ViewWeekDetails from "./components/viewWeekDetails";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />

        <Routes>
          <Route path="*" element={<Habit />} />
          <Route path="/view-week-details" element={<ViewWeekDetails />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
