import styled from 'styled-components'
import bell from '../../../public/img/bell.svg'

const ImageBox = styled.div`
    width: 22px;
    height: 24px;
    background-image: url(${bell});
`

/** Alarm Icon을 렌더링하는 component */
const Alarm = () => {
    return <ImageBox />
}

export default Alarm
