import React from "react";
import { AgGridReact } from "ag-grid-react";
import "./styles.scss";
import { DropdownMenu, DropdownButton } from "../DropdownMenu";

const NameCellRenderer = () => (
  <div style={{ position: "relative", top: "5px", textAlign: "right" }}>
    <DropdownMenu>
      <DropdownButton onClick={() => {}}>Edit</DropdownButton>
      <DropdownButton onClick={() => {}}>Delete</DropdownButton>
    </DropdownMenu>
  </div>
);

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "ID",
          field: "id",
          checkboxSelection: true,
          headerCheckboxSelection: true,
          pinned: true
        },
        {
          headerName: "Make",
          field: "make",
          resizable: true,
          sortable: true
        },
        {
          headerName: "Model",
          field: "model",
          resizable: true
        },
        {
          headerName: "Price",
          field: "price",
          filter: "agNumberColumnFilter"
        },
        {
          headerName: "",
          field: "actions",
          cellRendererFramework: NameCellRenderer
        }
      ],
      rowData: [
        {
          id: 1,
          make: "Toyota very long cell that will have to wrap and do things for sure",
          model: "Celica",
          price: 35000
        },
        {
          id: 2,
          make: "Ford",
          model: "Mondeo",
          price: 32000
        },
        {
          id: 3,
          make: "Porsche",
          model: "Boxter",
          price: 10000
        }
      ],
      rowHeight: 56,
      headerHeight: 56
    };
  }

  render() {
    return (
      <div className="ag-theme-balham">
        <AgGridReact
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowDragManaged
          suppressRowTransform // for dropdownmenu
          domLayout="autoHeight"
        />
      </div>
    );
  }
}

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
