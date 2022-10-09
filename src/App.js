import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Assignment from "./component/Assignment";
import CustomForm from "./component/CustomForm";
import Login from "./component/Login";
import List from "./component/list/List";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <h1>React-Tutorial </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomForm />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/product" element={<Product />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
