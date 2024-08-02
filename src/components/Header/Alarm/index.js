import styled from 'styled-components'
import bell from '../../../public/img/bell.svg'

const ImageBox = styled.img`
    width: 22px;
    height: 22px;
    background-image: url(${bell});
`
/** Alarm Icon을 렌더링하는 component */
const Alarm = () => {
    return <ImageBox />
}

export default Alarm
