import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
      color: ${props => props.theme.colors.gray.hover};
    }
  }

  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Navigation = ({ ...props }) => (
  <Nav {...props}>
    <Link to="?category=husky">Husky</Link>
    <Link to="?category=labrador">Labrador</Link>
    <Link to="?category=hound">Hound</Link>
    <Link to="?category=pug">Pug</Link>
  </Nav>
)

export default Navigation
