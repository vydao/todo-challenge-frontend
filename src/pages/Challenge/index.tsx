import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Challenge = () => {
  const { id } : { id: string} = useParams()

  const [challenge, setChallenge] = useState<any>({})

  useEffect(() => {
    // call API with ID
    console.log(id)
    setChallenge({
      name: "Tập luyện thể dục",
      description: 'Luyện tập hằng ngày để nâng cao sức khỏe',
    })
  }, [])

  return (
    <div>
      <Row>
        <Col md="1">
          Name:
        </Col>
        <Col md="6">
          {challenge.name}
        </Col>
      </Row>
      <Row>
        <Col md="1">
        Description:
        </Col>
        <Col md="6">
          {challenge.description}
        </Col>
      </Row>
    </div>
  )
}

export default Challenge
