import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { TownPage } from "./pages/Town";
import { Mint } from "@/pages/Mint";
import { CreateCollection } from "@/pages/CreateCollection";
import { MyCollections } from "@/pages/MyCollections";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Mint />} />
          <Route path="/town" element={<TownPage />} />
          <Route path="/create-collection" element={<CreateCollection />} />
          <Route path="/my-collections" element={<MyCollections />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
