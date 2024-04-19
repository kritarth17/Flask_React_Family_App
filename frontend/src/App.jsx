import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AddPeoplePage from "./pages/AddPeoplePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import PeoplePage from "./pages/PeoplePage";

const App = () => {
  // Add New Person
const addPerson = async (newPerson) => {
  const res = await fetch('http://127.0.0.1:5000/add_people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPerson),
  });
  return;
};
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-member" element={<AddPeoplePage addPeopleSubmit={addPerson} />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/people-list" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
};

export default App;
