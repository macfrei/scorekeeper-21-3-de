// import './Button.css'
// import PropTypes from 'prop-types'

import styled from 'styled-components/macro'

// Button.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node,
// }
// props
// export default function Button(props) {
//   return (
//     <button onClick={props.onClick} className={isActive ? 'Button active' : 'Button'}>
//       {children}
//     </button>
//   )
// }

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? 'steelblue' : '#ddd')};
  color: ${props => props.color};
  border-radius: 8px;

  &:hover {
    background-color: hotpink;
  }
`

export default Button
