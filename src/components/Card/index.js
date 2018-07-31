import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import tag from 'clean-tag'
import LazyLoad from 'react-lazyload'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { transitions } from 'polished'

import ImageRender from '~/styles/ImageRender'
import { transition } from '~/mixins/transition'
import { formatId } from '~/utils'

injectGlobal`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 2s ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 2s ease-in;
  }
`

const Panel = styled(tag).attrs({ bg: 'white' })`
  border: solid 1px #e9eef0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 360px;
  padding: 10px;
  margin: 20px 0 0 20px;
  cursor: pointer;
  ${transitions(transition({ property: 'box-shadow' }))};

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.19);
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

const Card = ({ data, ...props }) => (
  <Container {...props}>
    {data.list.map(dog => (
      <Panel key={formatId(dog)}>
        <LazyLoad throttle={300} height={600}>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Link
              to={{
                pathname: '/feed',
                search: `category=${data.category}&id=${formatId(dog)}`,
                state: { id: formatId(dog), url: dog },
              }}
            >
              <ImageRender image={dog} height={360} />
            </Link>
          </CSSTransitionGroup>
        </LazyLoad>
      </Panel>
    ))}
  </Container>
)

Card.propTypes = {
  data: PropTypes.any,
}

Card.defaultProps = {
  data: {},
}

export default Card
