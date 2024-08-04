import styled from 'styled-components'

const SelectorContainer = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
`

const SelectorButton = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => (props.selected ? '#363062' : '#BDBDBD')};
    margin-right: 10px;
    cursor: pointer;
`

const Selector = ({ setSelcted, selected }) => {
    return (
        <SelectorContainer>
            <SelectorButton
                onClick={() => setSelcted('all')}
                selected={selected === 'all'}
            >
                All
            </SelectorButton>
            <SelectorButton
                onClick={() => setSelcted('expense')}
                selected={selected === 'expense'}
            >
                Expense
            </SelectorButton>
            <SelectorButton
                onClick={() => setSelcted('income')}
                selected={selected === 'income'}
            >
                Income
            </SelectorButton>
        </SelectorContainer>
    )
}

export default Selector
