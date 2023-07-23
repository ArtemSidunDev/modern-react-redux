import { useState } from "react";
import Dropdown from "./Dropdown"

function SortableList({ data, fnKey, sortConfig, orderConfig }) {
  const [sortBy, setSortBy] = useState(null)
  const [orderBy, setOrderBy] = useState(null)

  const handelSortBy = (item) => {
    setSortBy(item)
  }

  const handelOrderBy = (item) => {
    setOrderBy(item)
  }
  let sortableData = data
  if(sortBy && orderBy) {
    const order = orderBy.value === 'asc' ? 1 : -1
    sortableData = [...data].sort((a, b) => {
      const sortValueA = sortBy.sortValue(a)
      const sortValueB = sortBy.sortValue(b)
      if (typeof sortValueA === 'string' && typeof sortValueB === 'string') {
        return sortValueA.localeCompare(sortValueB) * order;
      } else {
        return (sortValueA - sortValueB) * order
      }

    })
  }
  const renderItem = sortableData.map((row) => {
    return (
      <div className="grid grid-cols-5 border p-3 m-1" key={fnKey(row)}>
        <div>{row.address}</div>
        <div>{row.beds}</div>
        <div>{row.price}</div>
      </div>
    )
  })
  return (
    <div>
      <div className="flex flex-row justify-end">
        <Dropdown options={sortConfig} value={sortBy} onChange={handelSortBy}/>
        <Dropdown options={orderConfig} value={orderBy} onChange={handelOrderBy}/>
      </div>
      {renderItem}
    </div>
  );
}

export default SortableList