import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import Update from "./component/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
