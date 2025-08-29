import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import Product from "./Pages/Product";
import ViewPage from "./Pages/ViewPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/viewpage/:id" element={<ViewPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
