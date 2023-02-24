import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
              <div>Hola</div>
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
