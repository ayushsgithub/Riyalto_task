import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Title",
    selector: (row) => row.title,
    maxWidth: "280px",
  },
  {
    name: "Body",
    selector: (row) => row.body,
    maxWidth: "450px",
  },
  {
    name: "Edit",
    cell: (row) => {
      return (
        <Link
          to={`/editApi/${row.id}`}
          className="bg-blue-600 text-black p-2 rounded-md hover:bg-blue-400"
        >
          Edit
        </Link>
      );
    },
    maxWidth: "80px",
  },
  {
    name: "Delete",
    cell: (row) => {
      return (
        <Link
          to={`/deleteApi/${row.id}`}
          className="bg-red-600 text-black p-2 rounded-md hover-bg-red-400"
        >
          Delete
        </Link>
      );
    },
    maxWidth: "80px",
  },
];

export { columns };
