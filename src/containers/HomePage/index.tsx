import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import SeachBar from '../../components/SearchBar'
import { PageContainer } from './styles'

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <PageContainer>
            <Navbar >
			<SeachBar setSearchTerm={setSearchTerm} />
    
            </Navbar>
        </PageContainer>
    )
}

export default HomePage
