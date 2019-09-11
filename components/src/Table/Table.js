import React from "react";
import { Table as RVTable, Column as RVColumn } from "react-virtualized";
import styled from "styled-components";

const generateList = (numRows, numColumns) => {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (let j = 0; j < numColumns; j++) {
      row[`c${j}`] = `r${i}c${j}`;
    }
    rows.push(row);
  }

  return rows;
};

const NUM_ROWS = 10000;
const NUM_COLS = 50;

const list = generateList(NUM_ROWS, NUM_COLS);

const StyledTable = styled(RVTable)({
  ".ReactVirtualized__Table": {},
  ".ReactVirtualized__Table__Grid": {},
  ".ReactVirtualized__Table__headerRow": {
    fontWeight: 700,
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  ".ReactVirtualized__Table__row": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  ".ReactVirtualized__Table__headerTruncatedText": {
    display: "inline-block",
    maxWidth: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  ".ReactVirtualized__Table__headerColumn": {
    marginRight: "10px",
    minWidth: "50px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  ".ReactVirtualized__Table__rowColumn": {
    marginRight: "10px",
    minWidth: "50px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  ".ReactVirtualized__Table__headerColumn:first-of-type": {
    marginLeft: "10px"
  },
  ".ReactVirtualized__Table__rowColumn:first-of-type": {
    marginLeft: "10px"
  }
});

const generateColumns = numColumns => {
  const columns = [];

  for (let i = 0; i < numColumns; i++) {
    columns.push(<RVColumn key={i} label={`C${i}`} dataKey={`c${i}`} width={100} />);
  }

  return columns;
};

const Table = () => (
  <StyledTable
    width={500}
    height={500}
    headerHeight={20}
    rowHeight={30}
    rowCount={list.length}
    rowGetter={({ index }) => list[index]}
  >
    {generateColumns(NUM_COLS)}
  </StyledTable>
);

export default Table;
