import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { mystyles } from "./Style";
import { columns } from "./Columns";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const myTable = () => {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setApiData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      apiData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleShowClick = (row) => {
    navigate(`/showApi/${row.id}`);
  };

  return (
    <div>
      {apiData.length === 0 ? (
        <Spinner />
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="flex items-center justify-center my-5">
            Riyalto Task
          </h1>
          <DataTable
            title="API Table"
            pagination
            columns={columns}
            data={filteredData}
            customStyles={mystyles}
            theme="custom-theme"
            selectableRows
            fixedHeader
            selectableRowsHighlight
            fixedHeaderScrollHeight="460px"
            highlightOnHover
            actions={
              <button
                onClick={() => navigate(`/createApi`)}
                className="bg-blue-800 text-white p-1 text-base rounded-md w-24"
              >
                Create
              </button>
            }
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search here"
                className="w-48 foc p-2 rounded-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
            onRowClicked={handleShowClick}
          />
        </div>
      )}
    </div>
  );
};

export default myTable;
