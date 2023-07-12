import { useEffect, useRef, useState } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false)
  const handelClick = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  const ref = useRef()
  const handelOptionClick = (option) => {
    onChange(option)
    setIsOpen(false)
  }
  useEffect(() => {
    const handler = (event) => {
      if(!ref.current) return;
      if(!ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded p-1 cursor-pointer" onClick={() => handelOptionClick(option)} key={option.id}>
        {option.label}
      </div>
    )
  })
  return (
    <div ref={ref} className="w-48 relative">
      <Panel className="flex justify-between cursor-pointer items-center" onClick={handelClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  )
}

export default Dropdown