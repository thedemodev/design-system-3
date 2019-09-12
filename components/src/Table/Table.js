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

// const handleToggle = () => console.log("toggleD!");

const Expander = props =>
  console.log("hello", props) || (
    <div onClick={e => console.log("expander click event", e) || props.onToggle(props.data.id)}>
      {props.getToggleStatus(props.data.id) ? "v" : ">"}
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
          pinned: "left"
        },
        {
          cellRendererFramework: cellProps => (
            <Expander getToggleStatus={this.rowExpanded} onToggle={this.toggleRowExpanded} {...cellProps} />
          )
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
          price: 35000,
          expanded: false
        },
        {
          expanded: false,
          expandableRow: true,
          parentId: 1
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
      headerHeight: 56,
      rowExpanded: {}
    };

    this.rowExpanded = this.rowExpanded.bind(this);
    this.toggleRowExpanded = this.toggleRowExpanded.bind(this);
  }

  rowExpanded(parentRowId) {
    return this.state.rowExpanded[parentRowId];
  }

  toggleRowExpanded(parentRowId) {
    console.log("hello??", this.state, this.state.rowExpanded);
    const newState = Object.assign({}, this.state.rowExpanded, { [parentRowId]: !this.state.rowExpanded[parentRowId] });
    this.setState({ rowExpanded: newState });
  }

  render() {
    console.log("rerender", this.state);
    return (
      <div className="ag-theme-balham">
        <AgGridReact
          isFullWidthCell={rowNode => {
            console.log("row node", rowNode);
            return rowNode.data.expandableRow;
          }}
          fullWidthCellRendererFramework={
            props => (
              <div onClick={props => console.log("click!", props)}>
                {(!!this.rowExpanded(props.data.parentId)).toString()}
              </div>
            )

            // props => <div onClick={props => console.log("click!", props)}>expandable row</div>
            // console.log(props) || this.rowExpanded(props.data.parentId) ? (
            //   <div onClick={() => console.log("clicky") || this.toggleRowExpanded(props.data.parentId)}>expanded</div>
            // ) : null
          }
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
