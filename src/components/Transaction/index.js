import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import {
    allDataState,
    expenseDataState,
    incomeDataState,
} from '../../data/state'
import Title from './Title'
import Selector from './Selector'
import List from './TransactionsList'

import { limitRecentList } from '../../util/util'
import { useState } from 'react'

const TransactionContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 50px;
`

const ListContainer = styled.div`
    margin-top: 30px;
`
/** mock data에 담겨있는 transaction 정보를 가져와 list 형태로 보여주는 transaction component */
const Transaction = () => {
    const allData = useRecoilValue(allDataState)
    const incomes = useRecoilValue(incomeDataState)
    const expenses = useRecoilValue(expenseDataState)

    const [selected, setSelected] = useState('all')

    return (
        <TransactionContainer>
            <Title />
            <Selector setSelcted={setSelected} selected={selected} />

            <ListContainer>
                {selected === 'all' &&
                    limitRecentList(allData, 20).map((data, index) => (
                        <List key={index} data={data} />
                    ))}
                {selected === 'income' &&
                    limitRecentList(incomes, 10).map((data, index) => (
                        <List key={index} data={data} />
                    ))}
                {selected === 'expense' &&
                    limitRecentList(expenses, 10).map((data, index) => (
                        <List key={index} data={data} />
                    ))}
            </ListContainer>
        </TransactionContainer>
    )
}

export default Transaction
