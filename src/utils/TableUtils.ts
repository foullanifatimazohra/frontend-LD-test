export const getTableHead = (firstRow: any) => {
  if (!firstRow.length) {
    return [];
  } else {
    const keys = Object.keys(firstRow);
    //add column Power
    const tableHead = [...keys, "Power"];
    return tableHead;
  }
};
