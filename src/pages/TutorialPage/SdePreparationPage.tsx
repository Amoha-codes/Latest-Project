
import Navbar from '../../components/MainPageComponents/Navbar'
import SDEPreparationPage from '../../components/tutorial/TutorialMainPageCards/SdePreparationComponent'
import ComputerSciencePage from '../../components/tutorial/TutorialMainPageCards/ComputerScienceCoreSubjects'
// import Footer from '../components/Footer'

const SdePreparationPage = () => {
  return (
    <div>
      <Navbar darkMode={false} setDarkMode={function (): void {
              throw new Error('Function not implemented.')
          } }/>
    
    <SDEPreparationPage darkMode={false}/>
    <ComputerSciencePage/>
      
    </div>
  )
}

export default SdePreparationPage
