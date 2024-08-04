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

/** 전체 화면 Home을 렌더링하는 Component */
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
