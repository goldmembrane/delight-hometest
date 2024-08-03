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
    width: 22px;
    height: 24px;
    background-image: url(${menu});
    cursor: pointer;
`

const CardBox = styled.div`
    width: 22px;
    height: 24px;
    background-image: url(${card});
    cursor: pointer;
`

const ChartBox = styled.div`
    width: 22px;
    height: 24px;
    background-image: url(${chartSelected});
    cursor: pointer;
`

const UserBox = styled.div`
    width: 22px;
    height: 24px;
    background-image: url(${user});
    cursor: pointer;
`

const BottomNavigation = () => {
    return (
        <BottomNavigationBar>
            <MenuBox />
            <CardBox />
            <ChartBox />
            <UserBox />
        </BottomNavigationBar>
    )
}

export default BottomNavigation
