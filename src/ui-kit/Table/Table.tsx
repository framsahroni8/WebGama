/* eslint-disable react/jsx-key */
import React, { PropsWithChildren, ReactElement, useMemo, useState } from 'react'
import { Column, IdType, usePagination, useSortBy, useTable } from 'react-table'
import classNames from 'classnames'
import { Pagination, Search } from '..'
import './Table.scss'
import { SortingIcon } from './SortingIcon'

export type SortingType = IdType<string> | `-${IdType<string>}`

export interface ITableProps<T extends Record<string, unknown>> {
  className?: string
  columns: readonly Column<object>[]
  data: T[]
  isPagination?: boolean
  isSearch?: boolean
}

export const Table = <T extends Record<string, unknown>>(
  props: PropsWithChildren<ITableProps<T>>
): ReactElement => {
  const [searchedKeyword, setSearchedKeyword] = useState<string>('')
  const [pageIndex, setPageIndex] = useState<number>(0)

  const tableData = useMemo(() => {
    return props.data.filter((row) => {
      return Object.values(row).some((cell: any) => {
        return cell.toString().toLowerCase().includes(searchedKeyword.toLowerCase())
      })
    })
  }, [props.data, searchedKeyword])

  const { className, columns, isPagination, isSearch } = props

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    allColumns,
    gotoPage,
    setPageSize,
    state: { pageSize: currentPageSize },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: pageIndex, pageSize: 5 },
    },
    useSortBy,
    usePagination
  )

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value)
    setPageIndex(0)
    gotoPage(0)
  }

  const onPageChange = ({ selected }: { selected: number }) => {
    setPageIndex(selected)
    gotoPage(selected)
  }

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value))
    setPageIndex(0)
    gotoPage(0)
  }

  return (
    <>
      {/* {allColumns.map(column => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              {column.id}
            </label>
          </div>
        ))} */}
      <div className='flex items-center'>
        {isSearch && <Search searchedKeyword={searchedKeyword} onSearchChange={onSearchChange} />}
        <div className='dropdown'>
          <label tabIndex={0} className='btn m-1'>
            Click
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            {allColumns.map((column) => (
              <li key={column.id}>
                <label>
                  <input type='checkbox' {...column.getToggleHiddenProps()} /> {column.id}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <table className={classNames('Table', className)} {...getTableProps()}>
        <thead className='Table-THead'>
          {headerGroups.map((headerGroup) => (
            <tr className='Table-TR' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='Table-TH' {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className='Table-THInner'>
                    <div className='Table-THText'>{column.render('Header')}</div>
                    <>
                      {column.canSort && (
                        <div className='Table-SortingIcon'>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <SortingIcon sort={'descending'} />
                            ) : (
                              <SortingIcon sort={'ascending'} />
                            )
                          ) : (
                            <SortingIcon sort={'none'} />
                          )}
                        </div>
                      )}
                    </>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='Table-TBody' {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr className='Table-TR' {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className='Table-TD'
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          width: cell.column.width,
                        },
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {isPagination && Math.ceil(tableData.length / currentPageSize) && (
        <div className='flex justify-between items-center'>
          <div>
            Show
            <select value={currentPageSize} onChange={handlePageSizeChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            Items
          </div>
          <Pagination
            initialPage={pageIndex}
            pagesCount={Math.ceil(tableData.length / currentPageSize)}
            onChange={onPageChange}
          />
        </div>
      )}
    </>
  )
}
