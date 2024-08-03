import styled from 'styled-components'
import Title from './Title'
import Alarm from './Alarm'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    background-color: #fff;
    position: sticky;
    top: 0;
`

/** Header 영역을 렌더링하는 component */
const Header = () => {
    return (
        <HeaderContainer>
            <Title />

            <Alarm />
        </HeaderContainer>
    )
}

export default Header
