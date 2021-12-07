import { Routes as RoutesContainer, Route } from "react-router-dom";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import InventoryOverview from "./components/InventoryOverview";
import InventoryDetails from "./components/InventoryDetails";
import NoMatch from "./components/NoMatch";
import { Routes } from "./types";

function App() {
  return (
    <RoutesContainer>
      <Route path={`${Routes.home}`} element={<Home />} />
      <Route path={`${Routes.overview}`} element={<InventoryOverview />} />
      <Route
        path={`${Routes.inventory}/:id${Routes.overview}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.scanners}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.splitAssembly}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.locationAndSection}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.control}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.readers}`}
        element={<Inventory />}
      />
      <Route
        path={`${Routes.inventory}/:id${Routes.attendance}`}
        element={<Inventory />}
      />

      <Route
        path={`${Routes.inventory}/:id${Routes.details}${Routes.overview}`}
        element={<InventoryDetails />}
      />

      <Route path="*" element={<NoMatch />} />
    </RoutesContainer>
  );
}

export default App;
