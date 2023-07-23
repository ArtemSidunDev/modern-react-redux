import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/useSort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, handelClick, sortData } = useSort({ configs: config });
  
  const getIcon = (label) => {
    if(label !== sortBy) {
      return <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>;
    }
    if (sortOrder === null) {
      return <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>;;
    } else if (sortOrder === 'asc') {
      return <GoArrowDown />;
    } else {
      return <GoArrowUp />;

    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => {
        return (
          <th
            onClick={() => handelClick(column.label)}
            key={column.label}
            className="cursor-pointer hover:bg-gray-200"
          >
            <div className="flex items-center">
              {getIcon(column.label)}
              {column.label}
            </div>
          </th>
        );
      }
    }
  })

  const sortedData = sortData(data)

  return <div>
    <Table {...props} config={updatedConfig} data={sortedData} />
  </div>;
}

export default SortableTable