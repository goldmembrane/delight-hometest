import styled from 'styled-components'
import Title from './Title'
import Selector from './Selector'
import List from './TransactionsList'

const TransactionContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 50px;
`

const ListContainer = styled.div`
    margin-top: 30px;
`

const Transaction = () => {
    return (
        <TransactionContainer>
            <Title />
            <Selector />

            <ListContainer>
                {Array.from({ length: 5 }, () => 0).map((item, index) => (
                    <List key={index} />
                ))}
            </ListContainer>
        </TransactionContainer>
    )
}

export default Transaction
