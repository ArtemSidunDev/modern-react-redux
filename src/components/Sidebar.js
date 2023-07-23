import Link from "./Link";

function Sidebar() {
  const links = [
    {
      path: "/dropdown",
      label: "Dropdown"
    },
    {
      path: "/accordion",
      label: "Accordion"
    },
    {
      path: "/buttons",
      label: "Buttons"
    },
    {
      path: "/modal",
      label: "Modal"
    },
    {
      path: "/table",
      label: "Table"
    },
    {
      path: "/list",
      label: "List"
    }
  ]
  const renderedLinks = links.map((link) => {
    return (
      <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-3" key={link.path} to={link.path}>
        {link.label}
      </Link>
    )
  })
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  )
}

export default Sidebar