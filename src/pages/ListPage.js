import SortableList from "../components/SortableList";

function ListPage() {
  const data = [
    { address: '73 Willard', beds: 3, price: 2700 },
    { address: '1 Oak', beds: 2, price: 1600 },
    { address: '3 Oak', beds: 2, price: 800 },
    { address: '23 Baker', beds: 1, price: 1000 },
    { address: '3 Willard', beds: 3, price: 2700 }
  ]

  const sortConfig = [
    { label: 'Price', sortValue: (item) => item.price },
    { label: 'Beds', sortValue: (item) => item.beds },
    { label: 'Address', sortValue: (item) => item.address },
  ]
  const orderConfig = [
    { 
      label: 'ASC',
      value: 'asc'
    },
    {
      label: 'DESC',
      value: 'desc'
    }
  ]
  const fnKey = (item) => {
    return item.name
  }

  return (
    <div className="border">
      <SortableList data={data} fnKey={fnKey} sortConfig={sortConfig} orderConfig={orderConfig} />
    </div>
  )
}

export default ListPage