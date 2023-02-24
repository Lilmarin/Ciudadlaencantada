import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PageWrapper from "./Sections/PageWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Construccion" element={<div>Construccion</div>} />
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
