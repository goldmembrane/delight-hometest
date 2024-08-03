import styled from 'styled-components'
import Header from '../Header'
import MainArea from '../Main'
import Transaction from '../Transaction'

const HomeContainerBox = styled.div`
    padding: 28px;
    overflow-y: auto;
    height: 100%;
`

const Home = () => {
    return (
        <HomeContainerBox>
            <Header />
            <MainArea />
            <Transaction />
        </HomeContainerBox>
    )
}

export default Home
