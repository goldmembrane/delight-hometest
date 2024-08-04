import styled from 'styled-components'
import UnitSelector from './UnitSelector'
import Chart from './Chart'
import { useState } from 'react'

const MainContainerBox = styled.div`
    margin-top: 30px;
`

const MainArea = () => {
    const [selected, setSelected] = useState('week')
    return (
        <MainContainerBox>
            <UnitSelector selected={selected} setSelected={setSelected} />

            <Chart />
        </MainContainerBox>
    )
}

export default MainArea
