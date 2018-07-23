import React, { Fragment } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  a {
    text-decoration: none;
    line-height: 20px;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: ${props => props.theme.colors.gray['500']};
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.colors.gray.hover};
    }

    .active {
      color: red;
    }
  }

  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Navigation = ({ ...props }) => (
  <Fragment>
    <Nav {...props}>
      {['husky', 'labrador', 'hound', 'pug'].map(breed => (
        <NavLink
          key={breed}
          onClick={() => props.handleCategory(breed)}
          to={{
            pathname: '/feed',
            search: `?category=${breed}`,
            state: { category: breed },
          }}
          activeClassName="active"
        >
          {breed}
        </NavLink>
      ))}
      <NavLink to="/" onClick={props.handleClick}>
        Sair
      </NavLink>
    </Nav>
  </Fragment>
)

export default Navigation
