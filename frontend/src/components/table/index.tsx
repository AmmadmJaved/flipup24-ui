// components/GenericTable.tsx
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef,
} from '@tanstack/react-table';

function Table({ columns, data }: any) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-2 border-b text-left cursor-pointer"
                //{...header.getSortByToggleProps()}// Apply sorting toggle here
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                <span>
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === 'desc'
                      ? ' 🔽' // Descending order
                      : ' 🔼' // Ascending order
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-100">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2 border-b text-left">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
