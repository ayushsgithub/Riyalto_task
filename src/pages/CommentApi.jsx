import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const CommentApi = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
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
    <div className="bg-gray-100 min-h-screen p-4 max-w-7xl mx-auto pt-10">
      <h1 className="text-lg py-3">Comments:</h1>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {loading ? (
            <Spinner /> // Display a loading spinner while data is loading.
          ) : (
            data.map((item) => (
              <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="border-2 border-gray-500 rounded-lg p-4">
                  <h1 className="text-xl font-semibold text-blue-800">
                    {item.name}
                  </h1>
                  <h1 className="text-xl font-semibold text-blue-800">
                    {item.email}
                  </h1>
                  <p className="text-gray-700 mt-2">{item.body}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentApi;
