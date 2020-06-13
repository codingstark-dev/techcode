import { Grid } from "gridjs";

export function grid(node, data) {
  let grid = new Grid({
    columns: ["Name", "Email"],
    data,
    
    search: {
      enabled: true,
      placeholder: "Search...",
    },
  });

  grid.render(node);
}
