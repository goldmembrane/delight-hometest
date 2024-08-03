import styled from 'styled-components'

const SelectUnitArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ToggleBox = styled.div`
    width: 50%;
    border-radius: 20px;
    background-color: #f5f5f5;
    height: 34px;
    display: flex;
`

const WeekButtonBox = styled.div`
    width: 50%;
    padding: 5px 17px;
    background-color: #363062;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
`

const MonthButtonBox = styled.div`
    width: 50%;
    padding: 5px 17px;
    background-color: #f5f5f5;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: #6b6b6b;
`

const DateText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #363062;
`

const UnitSelector = () => {
    return (
        <SelectUnitArea>
            <ToggleBox>
                <WeekButtonBox>Week</WeekButtonBox>
                <MonthButtonBox>Month</MonthButtonBox>
            </ToggleBox>

            <DateText>MM DD, YYYY</DateText>
        </SelectUnitArea>
    )
}

export default UnitSelector
