import { useState } from "react";

function useSort({ configs }) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handelClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder('asc');
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  const sortData = (data) => {
    let sortedData = data
    if (sortBy && sortBy) {
      const config = configs.find((column) => column.label === sortBy)
      const order = sortOrder === 'asc' ? 1 : -1
      sortedData = [...data].sort((a, b) => {
        const aVal = config.sortValue(a);
        const bVal = config.sortValue(b);
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return aVal.localeCompare(bVal) * order;
        } else {
          return (aVal - bVal) * order
        }
      })
    }
    return sortedData
  }

  return {
    sortOrder,
    setSortOrder,
    sortBy,
    setSortBy,
    sortData,
    handelClick
  }
}

export default useSort