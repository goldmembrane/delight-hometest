import styled from 'styled-components'
import UnitSelector from './UnitSelector'

const MainContainerBox = styled.div`
    margin-top: 30px;
    overflow-y: auto;
    height: 100%;
`

const MainArea = () => {
    return (
        <MainContainerBox>
            <UnitSelector />
        </MainContainerBox>
    )
}

export default MainArea
