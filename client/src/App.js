import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";
import Homepage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="settings" element={<SettingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
