import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import CommentApi from "./CommentApi";

const ShowApi = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg max-w-7xl mx-auto h-fit flex items-center justify-center">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-blue-800">
              {data.title}
            </h1>
            <p className="text-gray-700 mt-2">{data.body}</p>
          </div>
        )}
      </div>
      <CommentApi />
    </div>
  );
};

export default ShowApi;
