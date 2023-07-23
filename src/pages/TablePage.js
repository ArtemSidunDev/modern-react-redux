import SortableTable from "../components/SortableTable";

function TablePage() {
  let data = [
    { name: 'Orange', color: 'bg-orange-500', score: 3 },
    { name: 'Apple', color: 'bg-green-500', score: 5 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Cherry', color: 'bg-red-500', score: 1 },
    { name: 'Mango', color: 'bg-blue-500', score: 4 },
    { name: 'Watermelon', color: 'bg-purple-500', score: 2 },
  ]

  const config = [
    { label: 'Name', render: (item) => item.name, sortValue: (item) => item.name },
    { label: 'Color', render: (item) => <div className={`p-3 m-2 ${item.color}`}></div> },
    { 
      label: 'Score', 
      render: (item) => item.score,
      sortValue: (item) => item.score
    },
  ]

  const fnKey = (item) => {
    return item.name
  }

  return (
    <div>
      <SortableTable data={data} config={config} fnKey={fnKey} />
    </div>
  )
}

export default TablePage