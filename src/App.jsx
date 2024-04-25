import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  console.log('Render de inicio de App')
  return (
    <>
      <ItemListContainer greeting='Bienvenido al E-Commerce de DataSolutions Argentina'/>
      <NavBar />
    </>
  )
}

export default App
