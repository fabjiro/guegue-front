import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";

function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<HomeScreen/>} />
    </Routes>
  );
}

export default HomeRoutes;