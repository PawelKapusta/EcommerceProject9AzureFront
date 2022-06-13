import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </Box>
    </BrowserRouter>
  );
};

export default App;
