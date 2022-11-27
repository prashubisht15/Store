import './App.css';
import DashBoard from './Components/DashBoard'
import { SnackbarProvider} from 'notistack'

function App() {
  return (
    <>
    <SnackbarProvider>
      <DashBoard/>
    </SnackbarProvider>
    </>
  )
}

export default App;
