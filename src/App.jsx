import { Route, Routes } from "react-router-dom";
import ListTable from "./components/ListTable";
import ShowApi from "./pages/ShowApi";
import DeleteApi from "./pages/DeleteApi";
import EditApi from "./pages/EditApi";
import CreaetApi from "./pages/CreaetApi";
import CommentApi from "./pages/CommentApi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListTable />} />
      <Route path="/showApi/:id" element={<ShowApi />} />
      <Route path="/deleteApi/:id" element={<DeleteApi />} />
      <Route path="/editApi/:id" element={<EditApi />} />
      <Route path="/createApi" element={<CreaetApi />} />
      <Route path="/commentApi/:id" element={<CommentApi />} />
    </Routes>

    // <ListTable />
  );
}

export default App;
