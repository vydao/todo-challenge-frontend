import React from 'react'
import Table from 'react-bootstrap/Table'
import { TableInstance, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'

import './style.scss'

interface ITableHandler {
  columns: any
  data: any
  handleClass?: string
}
const TableHandler = (props: ITableHandler) => {
  const { columns, data, handleClass } = props
  const tableInstance: TableInstance = useTable(
    {
      columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const { getTableProps, prepareRow, rows, columns: columnsTables } = tableInstance
  const renderSort = (item: any) => {
    if (item.isSorted) {
      return item.isSortedDesc ? (
        <span className="arrow-down position-absolute ms-1"></span>
      ) : (
        <span className="arrow-up position-absolute ms-1"></span>
      )
    }
    return (
      <>
        <span className="arrow-default-up position-absolute ms-1"></span>
        <span className="arrow-default-down position-absolute ms-1"></span>
      </>
    )
  }

  return (
    <Table
      className={`table table-striped table-light border rounded-3 ${handleClass ? handleClass : ''}`}
      {...getTableProps()}
    >
      <thead>
        <tr>
          {columnsTables.map((item: any, index: number) => (
            <th className="pe-3" onClick={() => item.toggleSortBy(!item.isSortedDesc)} key={index}>
              {item.Header}
              {item.canSort && <span className="position-relative cursor-pointer">{renderSort(item)}</span>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, index: number) => {
          prepareRow(row)
          return (
            <tr key={index} {...row.getRowProps()}>
              {row.cells.map((cell: any, idx: number) => {
                return (
                  <td key={idx} {...cell.getCellProps()} className="style-color">
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableHandler
