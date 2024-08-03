import styled from 'styled-components'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const ImageBox = styled.div`
    width: 24px;
    height: 24px;
    color: #595959;
`

/** Alarm Icon을 렌더링하는 component */
const Alarm = () => {
    return (
        <ImageBox>
            <NotificationsNoneIcon />
        </ImageBox>
    )
}

export default Alarm
