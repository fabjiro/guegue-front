import { Route, Routes } from "react-router-dom";
import { ShellRoute } from "./presentation/screens/shell/ShellRoute";

function App() {
  return (
    <Routes>
      <Route element={<ShellRoute />} path="/*" />
    </Routes>
  );
}

export default App;
