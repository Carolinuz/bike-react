import styled from 'styled-components'
import theme from '../../themas'

const ContainerNavProcess = styled.div`
  height: 5rem;
  display:flex;
  justify-content:center;
  align-items: center;
  margin-bottom: 9rem;
  padding-top: 5rem;
`

const Nav = styled.div`
  display: flex;
  gap: 4rem;
  list-style: none;
  position: relative;
`
const Li = styled.li`
  background-color: ${(props) => props.check ? theme.backgroundBlue : theme.backgroundGray};
  border: 1px solid ${theme.backgroundBlue};
  border-radius: 50%;
  width: 3.8rem;
  height: 3.8rem;
  z-index: 2;
`
const BarLine = styled.div`
  position: absolute;
  width: 26.6rem;
  height: 0.6rem;
  background-color: ${theme.backgroundGray};
  top: 1.7rem;
  z-index: 1;
`

// const Checked = (props) => { return()}

export { ContainerNavProcess, Nav, Li, BarLine }
