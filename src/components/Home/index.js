import styled from 'styled-components'
import Header from '../Header'
import MainArea from '../Main'

const HomeContainerBox = styled.div`
    padding: 28px;
`

const Home = () => {
    return (
        <HomeContainerBox>
            <Header />
            <MainArea />
        </HomeContainerBox>
    )
}

export default Home
