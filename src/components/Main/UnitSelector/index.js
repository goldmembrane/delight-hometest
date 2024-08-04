import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { allDataState } from '../../../data/state'
import { formatDate, limitRecentList } from '../../../util/util'

const SelectUnitArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ToggleBox = styled.div`
    width: 60%;
    border-radius: 20px;
    background-color: #f5f5f5;
    height: 34px;
    display: flex;
`

const WeekButtonBox = styled.div`
    width: 45%;
    padding: 5px 17px;
    background-color: ${(props) => (props.selected ? '#363062' : 'f5f5f5')};
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => (props.selected ? '#fff' : '6b6b6b')};
    text-align: center;
`

const MonthButtonBox = styled.div`
    width: 45%;
    padding: 5px 17px;
    background-color: ${(props) => (props.selected ? '#363062' : 'f5f5f5')};
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => (props.selected ? '#fff' : '6b6b6b')};
    text-align: center;
`

const DateText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #363062;
`

/** 보여줄 차트 단위를 주 or 달 단위로 toggle 하는 component */
const UnitSelector = ({ selected, setSelected }) => {
    const allData = useRecoilValue(allDataState)
    const recentData = limitRecentList(allData, 1)[0]
    return (
        <SelectUnitArea>
            <ToggleBox>
                <WeekButtonBox
                    onClick={() => setSelected('week')}
                    selected={selected === 'week'}
                >
                    Week
                </WeekButtonBox>
                <MonthButtonBox
                    onClick={() => setSelected('month')}
                    selected={selected === 'month'}
                >
                    Month
                </MonthButtonBox>
            </ToggleBox>

            <DateText>{formatDate(recentData.timestamp, selected)}</DateText>
        </SelectUnitArea>
    )
}

export default UnitSelector
