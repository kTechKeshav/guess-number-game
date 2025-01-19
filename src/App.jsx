import { RecoilRoot } from 'recoil'
import './App.css'
import NumberGuessGame from './components/NumberGuessGame'

function App() {

  return (
    <RecoilRoot>
      <NumberGuessGame/>
    </RecoilRoot>
  )
}

export default App
