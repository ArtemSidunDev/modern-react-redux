import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

function Accordion ({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(-1)
  const handelClick = (index) => {
    setExpendedIndex(current => {
      if(current === index) {
        return -1
      } else {
        return index
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expendedIndex
    const icon = (
      <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    )
    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer" onClick={() => handelClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })
  return (
    <div className="border-x border-t rounded">
      {renderedItems}
    </div>
  )
}

export default Accordion