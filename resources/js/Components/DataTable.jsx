import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import ButtonLink from '@/Components/ButtonLink'

const DataTable = ({ columns, data, itemsPerPage = 10, mapping, emptyText = 'No data found' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Helper function to get the mapped column name from the mapping object
  const getMappedColumnName = (key) => {
    const mappedKey = Object.keys(mapping).find(mappedKey => mapping[mappedKey] === key);
    return mappedKey ? mappedKey : key;
  }

  // Filter data based on search term and get mapped column names
  const filteredData = data.filter(item => {
    return columns.some(column => {
      const columnName = getMappedColumnName(column);
      return String(item[columnName]).toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Render the table
  return (
    <div>
      {/* Search input */}
      <div className='w-full py-2'>
        <input
            type="text"
            placeholder="Search..."
            className="w-1/4 border border-green-500 rounded focus:ring-green-500 focus:border-green-500 p-2 mb-4"
            value={searchTerm}
            onChange={handleSearch}
        />
      </div>
      {/* Render table header */}
      <table className={'w-full text-sm text-left text-gray-500 dark:text-gray-400 '}>
        <thead className={'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '}>
          <tr>
            {columns.map(column => (
              <th scope="col" className="px-4 py-3 border text-white" key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table data */}
          { currentItems.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="bg-gray-100 hover:bg-gray-300 text-center py-4">
                    {emptyText}
                  </td>
                </tr>
            ) : ( currentItems.map((item, index) => (
                <tr key={item.id} 
                    className={index % 2 === 0 ? " bg-gray-100 hover:bg-gray-300" : " hover:bg-gray-300"}
                >
                  {columns.map(column => {
                    if (column === 'Actions') {
                        return (<td className="border px-4 py-3" key={column}>
                            <ButtonLink href={ item.actions.edit } className='bg-green-500 hover:text-white hover:bg-green-400'>
                                Edit
                            </ButtonLink>
                        </td>)
                    }
                    else{
                       return (<td className="border px-4 py-3" key={column}>{item[getMappedColumnName(column)]}</td>)
                    }
                  })}
                </tr>
              ))
            )
            
          }
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end my-4 mr-2">
        <button
          disabled={currentPage === 1}
          className={`mr-2 px-4 py-2 ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          } text-white rounded`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          className={`px-4 py-2 ${
            currentPage === totalPages || totalPages === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          } text-white rounded`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
