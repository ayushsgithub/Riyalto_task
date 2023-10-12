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
    cell: (row) => (
      <button className="bg-blue-600 text-black p-2 rounded-md hover:bg-blue-400">
        Edit
      </button>
    ),
    maxWidth: "80px",
    paddingleft: "100px",
  },
  {
    name: "Delete",
    cell: (row) => (
      <button className="bg-red-600 text-black p-2 rounded-md hover:bg-red-400">
        Delete
      </button>
    ),
    maxWidth: "80px",
  },
];

export { columns };
