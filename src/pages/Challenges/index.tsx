import React, { useState } from 'react'

import TableHandler from 'components/TableHandler'

const Challenges = () => {
  const [listChallenges, setListChallenges] = useState([
    {
      name: 'lex',
      description: 'hihi'
    },{
      name: 'lex 1',
      description: 'haha'
    }
  ])

  const manageCommodityGroupsColumn = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
  ]
  return (
    <div>
      {!!listChallenges.length && <TableHandler columns={manageCommodityGroupsColumn} data={listChallenges} />}
    </div>
  )
}

export default Challenges
