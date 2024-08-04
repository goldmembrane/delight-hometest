import { AreaChart, Area, Legend, Tooltip, XAxis } from 'recharts'
import { useRecoilValue } from 'recoil'

import { expenseDataState, incomeDataState } from '../../../data/state'

import styled from 'styled-components'
import { limitRecentList } from '../../../util/util'

const ChartContainerBox = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 10px;
    position: relative;
`
const ChartContainer = styled.div`
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
`

const RenderWeekIncomeChart = ({ type }) => {
    const incomeData = useRecoilValue(incomeDataState)
    const weekIncome =
        type === 'week'
            ? limitRecentList(incomeData, 7)
            : limitRecentList(incomeData, 30)

    return (
        <AreaChart width={300} height={300} data={weekIncome}>
            <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#363062" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#363062" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="amount"
                stroke="#363062"
                fill="url(#colorIncome)"
            />
        </AreaChart>
    )
}

const RenderWeekExpenseChart = ({ type }) => {
    const expenseData = useRecoilValue(expenseDataState)
    const weekExpense =
        type === 'week'
            ? limitRecentList(expenseData, 7).map((data) => {
                  return { ...data, amount: Math.abs(data.amount) }
              })
            : limitRecentList(expenseData, 30).map((data) => {
                  return { ...data, amount: Math.abs(data.amount) }
              })

    return (
        <AreaChart width={300} height={300} data={weekExpense}>
            <defs>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5BDAA4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5BDAA4" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="amount"
                stroke="#5BDAA4"
                fill="url(#colorExpense)"
            />
        </AreaChart>
    )
}

const Chart = ({ unit }) => {
    return (
        <ChartContainerBox>
            <ChartContainer>
                <RenderWeekIncomeChart type={unit} />
            </ChartContainer>
            <ChartContainer>
                <RenderWeekExpenseChart type={unit} />
            </ChartContainer>
        </ChartContainerBox>
    )
}

export default Chart
