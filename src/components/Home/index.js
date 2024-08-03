import styled from 'styled-components'
import Header from '../Header'
import MainArea from '../Main'
import Transaction from '../Transaction'
import BottomNavigation from '../Navigation'

const HomeContainerBox = styled.div`
    padding: 0 28px 28px 28px;
    overflow-y: auto;
    height: 82.5%;
`

const Home = () => {
    return (
        <>
            <HomeContainerBox>
                <Header />
                <MainArea />
                <Transaction />
            </HomeContainerBox>
            <BottomNavigation />
        </>
    )
}

export default Home
