// src/App.js
import React from "react";
import { Container, CssBaseline } from "@mui/material";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container>
        <ItemList />
      </Container>
    </div>
  );
}

export default App;
