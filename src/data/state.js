import { atom } from 'recoil'
import mockData from './mockdata.json'

export const allDataState = atom({
    key: 'All',
    default: mockData,
})

export const incomeDataState = atom({
    key: 'income',
    default: mockData.filter((data) => {
        return Number(data.amount) > 0
    }),
})

export const expenseDataState = atom({
    key: 'expense',
    default: mockData.filter((data) => {
        return Number(data.amount) < 0
    }),
})
