import styled from 'styled-components'

const SelectorContainer = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
`

const SelectorButton = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #363062;
    margin-right: 10px;
    cursor: pointer;
`

const Selector = () => {
    return (
        <SelectorContainer>
            <SelectorButton>All</SelectorButton>
            <SelectorButton>Expense</SelectorButton>
            <SelectorButton>Income</SelectorButton>
        </SelectorContainer>
    )
}

export default Selector
