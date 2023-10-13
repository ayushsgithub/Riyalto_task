import { createTheme } from "react-data-table-component";

export default createTheme(
  "custom-theme",
  {
    text: {
      primary: "#FFD700", // Gold
      secondary: "#A9A9A9", // Silver
    },
    background: {
      default: "#333333", // Dark gray
    },
    context: {
      background: "#FF4500", // Orange Red
      text: "#FFFFFF",
    },
    divider: {
      default: "#555555", // Light gray
    },
    action: {
      button: "rgba(255,255,255,.54)",
      hover: "rgba(255,255,255,.08)",
      disabled: "rgba(255,255,255,.12)",
    },
  },
  "dark"
);

const mystyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
};

export { mystyles, createTheme };
