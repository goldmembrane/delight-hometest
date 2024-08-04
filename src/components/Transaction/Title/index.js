import styled from 'styled-components'

const SemiTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: #000;
`

/** Transaction 영역의 title을 보여주는 component */
const Title = () => {
    return <SemiTitle>Recent Transactions</SemiTitle>
}

export default Title
