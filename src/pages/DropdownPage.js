import { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropdownPage() {
  const [selection, setSelection] = useState(null)
  const options = [
    {
      id: 1,
      label: 'Green',
      value: 'green'
    },
    {
      id: 2,
      label: 'Red',
      value: 'red'
    },
    {
      id: 3,
      label: 'Blue',
      value: 'blue'
    }
  ]
  function handelSelect(option) {
    setSelection(option)
  }
  return (
    <div className="flex">
      <Dropdown options={options} onChange={handelSelect} value={selection} />
    </div>
  );
}

export default DropdownPage