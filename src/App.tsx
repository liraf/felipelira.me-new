import { Outlet } from "react-router-dom";

// Global components
import { Menu } from "./components/global/Menu";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
