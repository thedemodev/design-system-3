import React from "react";
import { Table as RVTable, Column as RVColumn } from "react-virtualized";
import styled from "styled-components";

const list = [
  {
    c1: "r1-cell1",
    c2: "r1-cell2",
    c3: "r1-cell3",
    c4: "r1-cell4"
  },
  {
    c1: "r2-cell1",
    c2: "r2-cell2",
    c3: "r2-cell3",
    c4: "r2-cell4"
  }
];

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
    minWidth: "0px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  ".ReactVirtualized__Table__rowColumn": {
    marginRight: "10px",
    minWidth: "0px",
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

const Table = () => (
  <StyledTable
    width={300}
    height={300}
    headerHeight={20}
    rowHeight={30}
    rowCount={list.length}
    rowGetter={({ index }) => list[index]}
  >
    <RVColumn label="C1" dataKey="c1" width={100} />
    <RVColumn label="C2" dataKey="c2" width={200} />
    <RVColumn label="C3" dataKey="c3" width={300} />
    <RVColumn label="C4" dataKey="c4" width={200} />
  </StyledTable>
);

export default Table;
