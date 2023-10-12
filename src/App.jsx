import { Route, Routes } from "react-router-dom";
import ListTable from "./components/ListTable";
import ShowApi from "./pages/ShowApi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListTable />} />
      <Route path="/showApi/:title" element={<ShowApi />} />
    </Routes>

    // <ListTable />
  );
}

export default App;
