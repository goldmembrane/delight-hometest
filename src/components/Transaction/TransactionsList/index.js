import styled from 'styled-components'

const ListBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const ListImage = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 8px;
    background-color: #e2e2e2;
`

const ListContentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    width: 80%;
`

const ListContent = styled.div`
    display: flex;
    flex-direction: column;
`
const ListName = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #000;
`

const ListSemiName = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #6b6b6b;
`

const ListPrice = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #363062;
`

const ListTime = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #6b6b6b;
`

const List = () => {
    return (
        <ListBox>
            <ListImage />

            <ListContentBox>
                <ListContent>
                    <ListName>Name</ListName>
                    <ListSemiName>Transfer</ListSemiName>
                </ListContent>

                <ListContent>
                    <ListPrice>-$432.9</ListPrice>
                    <ListTime>3.30 AM</ListTime>
                </ListContent>
            </ListContentBox>
        </ListBox>
    )
}

export default List
