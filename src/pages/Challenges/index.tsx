import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

import TableHandler from 'components/TableHandler'

const Challenges = () => {
  const [listChallenges, setListChallenges] = useState([
    {
      id: 1,
      name: 'lex',
      description: 'Lẫu cua đồng'
    },{
      id: 2,
      name: 'lex 1',
      description: 'lẫu tôm càng'
    },{
      id: 3,
      name: 'lex 3',
      description: 'Lẫu gà ớt hiễm'
    },{
      id: 4,
      name: 'lex 4',
      description: 'Lẫu Bò'
    },{
      id: 5,
      name: 'lex 5',
      description: 'Lẫu thái'
    }
  ])

  useEffect(() => {
    // call api get list challenges

  }, [])

  const onClickDeleteChallenge = () => {
    console.log('Delete Challenge')
  }
  const challengesColumn = [
    {
      Header: 'ID',
      accessor: 'id',
      Cell: ({ row: { original } }: any) => (
        <Link to={`/challenge/${original.id}`} className="cursor-pointer">
          {original?.id}
        </Link>
      ),
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Action',
      accessor: 'action',
      isDisableSort: true,
      Cell: ({ row: { original } }: any) => {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="success" className="dark-green" />
            <Dropdown.Menu className="p-0" align="end">
              <Link to={`/challenge/${original.id}`} className="style-link">
                View Challenge
              </Link>
              <Link to={`/challenge/${original.id}/edit`} className="style-link">
                Edit Challenge
              </Link>
              <div className="style-link cursor-pointer" onClick={onClickDeleteChallenge}>
                Delete Challenge
              </div>
            </Dropdown.Menu>
          </Dropdown>
        )
      },
    },
  ]
  return (
    <div>
      {!!listChallenges.length && <TableHandler columns={challengesColumn} data={listChallenges} />}
    </div>
  )
}

export default Challenges
