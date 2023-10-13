import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const DeleteApi = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setLoading(false);
        console.log("deleted");
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete it?</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteApi;
