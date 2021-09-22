import React from 'react'
import Logo from '../logo'
import { LogoContainer, NavbarContainer } from './styles'
type Props = {

}
const Navbar:React.FC<Props> = ({children}) => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            {children}
        </NavbarContainer>
    )
}

export default Navbar
