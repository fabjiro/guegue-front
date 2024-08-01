import { Routes, Route } from "react-router-dom";

function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<h1>pagina inicial</h1>} />
    </Routes>
  );
}

export default HomeRoutes;