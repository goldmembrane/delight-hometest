import styled from 'styled-components'
import UnitSelector from './UnitSelector'
import Chart from './Chart'

const MainContainerBox = styled.div`
    margin-top: 30px;
`

const MainArea = () => {
    return (
        <MainContainerBox>
            <UnitSelector />

            <Chart />
        </MainContainerBox>
    )
}

export default MainArea
