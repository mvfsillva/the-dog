import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tag from 'clean-tag'

const Panel = styled(tag).attrs({ bg: 'white' })`
  border: solid 1px #e9eef0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 360px;
  padding: 10px;
  margin: 10px 0 0 10px;
  > img {
    width: 320px;
    height: 360px;
  }
`

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
`

const formatId = dog => {
  const regex = /(^.*)\/(.*)?\..{3,}$/g
  return regex.exec(dog)[2]
}

const Card = ({ data }) => (
  <Container>
    {data.map(dog => (
      <Panel key={formatId(dog)}>
        <img src={dog} />
      </Panel>
    ))}
  </Container>
)

Card.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Card
