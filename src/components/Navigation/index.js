import styled from 'styled-components'

import menu from '../../public/img/menu.svg'
import card from '../../public/img/card.svg'
import chartSelected from '../../public/img/chart-selected.svg'
import user from '../../public/img/user.svg'

const BottomNavigationBar = styled.div`
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 99;
    background-color: #fff;
`

const MenuBox = styled.div`
    width: 25px;
    height: 24px;
    background-image: url(${menu});
    cursor: pointer;
`

const CardBox = styled.div`
    width: 25px;
    height: 24px;
    background-image: url(${card});
    cursor: pointer;
`

const SelectedArea = styled.div`
    width: 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ChartBox = styled.div`
    width: 22px;
    height: 24px;
    background-image: url(${chartSelected});
    cursor: pointer;
    margin-bottom: 15px;
`

const ActivatedBar = styled.div`
    width: 25px;
    height: 5px;
    background-color: #363062;
    border-radius: 4px 4px 0px 0px;
`

const UserBox = styled.div`
    width: 25px;
    height: 24px;
    background-image: url(${user});
    cursor: pointer;
`
/** 하단부 navigation bar를 보여주는 component */
const BottomNavigation = () => {
    return (
        <BottomNavigationBar>
            <MenuBox />
            <CardBox />
            <SelectedArea>
                <div></div>
                <ChartBox />
                <ActivatedBar />
            </SelectedArea>
            <UserBox />
        </BottomNavigationBar>
    )
}

export default BottomNavigation
