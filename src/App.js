import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import Home from './components/Home'

const App = () => {
    return (
        <RecoilRoot>
            <Home />
        </RecoilRoot>
    )
}

export default App
