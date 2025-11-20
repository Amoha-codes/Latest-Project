

import { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MainPageComponents/Navbar";
import Footer from "./components/MainPageComponents/Footer";
// import Home from "./pages/Homepage";
// import About from "./components/About";
import PracticePage from "./pages/PracticePage/MainPracticePage";
import Courses from "./components/MainPageComponents/Courses";
import Careers from "./components/MainPageComponents/Careers";
import Contact from "./components/MainPageComponents/ContactUs";
import BusinessPartners from "./components/MainPageComponents/BusineesPartner";
// import { LaunchingSoon } from "./components/LaunchingSoon.tsx";

// Individual practice section pages
// import DSAProblems from "./pages/ServiceBasedPatternDSA";//ye change kiya commit ke time changes
import ServiceBasedDSA from "./pages/PracticePage/ServiceBasedDSA";
import Blind75 from "./pages/PracticePage/Blind75.tsx";
import AllInOneDSA from "./pages/PracticePage/ALLINONEDSA";
import Algorithm from "./pages/PracticePage/Algorithm";
import ServiceBasedPatternDSA from "./pages/PracticePage/ServiceBasedPatternDSA";
import NumbersProblems from "./pages/PracticePage/NumbersProblems";
import ProgramingLang  from "./pages/PracticePage/ProgramingLang.tsx";

import Homepage from "./pages/MainPage/Homepage";
import Practice from "./pages/PracticePage/Praactice"
import CppTutorial from "./components/tutorial/ProgrammingLanguage/CPPTheory/CppTutorial.tsx";


// IMPORT TUTORIAL SECTION PAGE
// import SdePreparationPage from "./components/tutorial/Exxxtraaaaacode.tsx";
// import SdePreparationPage from "./pages/SdePreparationPage.tsx";
import TutorialPage from "./pages/TutorialPage/TutorialPage.tsx";
// AngerManagementPage

import SdePreparationComponent from "./components/tutorial/TutorialMainPageCards/SdePreparationComponent.tsx";
import ComputerScienceCoreSubjects from "./components/tutorial/TutorialMainPageCards/ComputerScienceCoreSubjects.tsx"
import Programminglanguage from "./components/tutorial/TutorialMainPageCards/Programminglanguage.tsx";
import WebDevLanguage from "./components/tutorial/TutorialMainPageCards/WebDevLanguage.tsx";
import MobileDevLanguage from "./components/tutorial/TutorialMainPageCards/MobileDevLanguage.tsx";
import SystemProgramingPage from "./components/tutorial/TutorialMainPageCards/SystemProgramingPage.tsx";
import DatabaseLanguagePage from "./components/tutorial/TutorialMainPageCards/DatabaseLanguagePage.tsx";
import GameDevelopmentpage from "./components/tutorial/TutorialMainPageCards/GameDevelopmentpage.tsx";
import ScriptingLanguagePage from "./components/tutorial/TutorialMainPageCards/ScriptingLanguagePage.tsx";

import Exxxtraaaaacode from "./components/tutorial/TutorialMainPageCards/Exxxtraaaaacode.tsx";
import { LaunchingSoon } from "./components/MainPageComponents/LaunchingSoon.tsx";
import TrendingTechnologies from "./components/tutorial/TutorialMainPageCards/TrendingTechnologies.tsx";
import W3School from "./components/tutorial/TutorialMainPageCards/W3School.tsx";

// Course Page Import
import FullStackCourseMainPage from "./components/Course/FullStack Course/FullStackCourseMainPage.tsx";
import AIMLCourseMainPage from "./components/Course/AI&ML Mastery/AIMLCourseMainPage.tsx";
import CSSCourseMainPage from "./components/Course/CSSCourse/CSSCourseMainPage.tsx";
import DataEngineeringCourseMainPage from "./components/Course/DataEngineeringCourse/DataEngineeringCourseMainPage.tsx";
import AlgorithmCourseMainPage from "./components/Course/DSA algorithmCourse/AlgorithmCourseMainPage.tsx";
import AtoZCourseMainPage from "./components/Course/DSA AtoZCourse copy/AtoZCourseMainPage.tsx";
import NextjsCourseMainPage from "./components/Course/FrontendwithNext.js/NextjsCourseMainPage.tsx";
import ReactCourseMainPage from "./components/Course/FrontendwithReact/ReactCourseMainPage.tsx";
import HTMLCourseMainPage from "./components/Course/HTMLProgramming/HTMLCourseMainPage.tsx";
import JavaCourseMainPage from "./components/Course/JavaCourse.tsx/JavaCourseMainPage.tsx";
import JavascriptCourseMainPage from "./components/Course/JavascriptCourse/JavascriptCourseMainPage.tsx";
import MERNCourseMainPage from "./components/Course/MERNStack Development/MERNCourseMainPage.tsx";
import PythonCourseMainPage from "./components/Course/PythonCourse/PythonCourseMainPage copy.tsx";
import TypescriptCourseMainPage from "./components/Course/TypescriptCourse/TypescriptCourseMainPage.tsx";
import CourseMainPage from "./components/Course/C++Course/CourseMainPage.tsx";
import ExploreAllComponent from "./components/Course/ExploreAllComponent.tsx";

// import MathsCS from "./components/tutorial/ComputerScienceCoreSubject/CoreFoundations/MathsForComputerScience/MathsCS";
// import NetworksTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerNetworks/NetworksTutorial.tsx";
// import OperatingSystemsTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/OperatingSystems/OperatingSystemsTutorial.tsx";
// import OrganizationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerOrganization/OrganizationTutorial.tsx";
// import ComputationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Theory Of Computation/ComputationTutorial.tsx";
// import CompilerTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Compiler Design/CompilerTutorial.tsx";
// import DistributedTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Distributed Systems/DistributedTutorial.tsx";
// import LinuxTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Linux Tutorial/LinuxTutorial.tsx";
// import CyberSecurityTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/CyberSecurity Tutorial/CyberSecurityTutorial.tsx";
// import DbmsTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Database Management System(DBMS)/DbmsTutorial.tsx";
// import WarehousingTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Data Warehousing/WarehousingTutorial.tsx";
import GO from "./components/tutorial/ProgrammingLanguage/GO/GO.tsx";
import Kotlin from "./components/tutorial/ProgrammingLanguage/Kotlin/Kotlin.tsx";
import Swift from "./components/tutorial/ProgrammingLanguage/Swift/Swift.tsx";
import ComputerFundamental from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/ComputerFundamentals/ComputerFundamental.tsx";
import EngMath from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/EngineeringMathematics/EngMath.tsx";
import MathCS from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/MathForComputerScience/MathCS.tsx";
import JSTutorial from "./components/tutorial/ProgrammingLanguage/JSTheory/JSTutorial.tsx";
import TypescriptTutorial from "./components/tutorial/ProgrammingLanguage/TypescriptTheory/TypescriptTutorial.tsx";
import Csharp from "./components/tutorial/ProgrammingLanguage/Csharp/Csharp.tsx";
import JavaTutorial from "./components/tutorial/ProgrammingLanguage/JavaTheory/JavaTutorial.tsx";
import PythonTutorial from "./components/tutorial/ProgrammingLanguage/PythonTheory/pythonTutorial.tsx";






//import
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Homepage darkMode={darkMode}/>} />
        <Route path="/tutorial" element={<TutorialPage darkMode={darkMode} /> } />
        

        <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode}/>} />
        <Route path="/careers" element={<Careers darkMode={darkMode}/>} />
        <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
        <Route path="/businesspartner" element={<BusinessPartners darkMode={darkMode}/>} />
        <Route path="/launchingsoon" element={<LaunchingSoon darkMode={darkMode}/>} />



        {/* Individual practice section pages */}
        <Route path="/practice/practice" element={<Practice darkMode={darkMode} />} />
        <Route path="/practice/service-based-dsa" element={<ServiceBasedDSA darkMode={darkMode} />} />
        <Route path="/practice/blind-75" element={<Blind75 darkMode={darkMode} />} />
        <Route path="/practice/all-in-one-dsa" element={<AllInOneDSA darkMode={darkMode} />} />
        <Route path="/practice/algorithm" element={<Algorithm darkMode={darkMode} />} />
        <Route path="/practice/service-based-pattern-dsa" element={<ServiceBasedPatternDSA darkMode={darkMode} />} />
        <Route path="/practice/NumbersProblems" element={<NumbersProblems darkMode={darkMode} />} />
        <Route path="/practice/ProgramingLang" element={<ProgramingLang darkMode={darkMode} />} />
        <Route path="/practice/CppTutorial" element={<CppTutorial darkMode={darkMode} />} />

         {/* <Route path="/softskill" element={<AngerManagementPage />} /> */}

       {/* Tutorial page Rotuing  */}
        <Route path="/tutorial/sde-preparation" element={<SdePreparationComponent darkMode={darkMode}/>} /> 
        <Route path="/tutorial/ComputerScienceCoreSubjects" element={<ComputerScienceCoreSubjects/>} />
        <Route path="/tutorial/Programminglanguage" element={<Programminglanguage/>} />
        <Route path="/tutorial/WebDevLanguage" element={<WebDevLanguage/>} />
        <Route path="/tutorial/MobileDevLanguage" element={<MobileDevLanguage/>} />
        <Route path="/tutorial/SystemProgramingPage" element={<SystemProgramingPage/>} />
        <Route path="/tutorial/DatabaseLanguagePage" element={<DatabaseLanguagePage/>} />
        <Route path="/tutorial/GameDevelopmentpage" element={<GameDevelopmentpage/>} />
        <Route path="/tutorial/ScriptingLanguagePage" element={<ScriptingLanguagePage/>} />
        <Route path="/tutorial/TrendingTechnologies" element={<TrendingTechnologies/>} />
        
        <Route path="/tutorial/Exxxtraaaaacode" element={<Exxxtraaaaacode/>} />
        <Route path="/tutorial/W3School" element={<W3School/>} />
        
        
       

        {/* Computer Science */}
        <Route path="/ComputerFundamentals" element={<ComputerFundamental darkMode={darkMode}/>} />
        <Route path="/EngMath" element={<EngMath darkMode={darkMode}/>} />
        <Route path="/MathsCS" element={<MathCS  />} />
        <Route path="/JSTutorial" element={<JSTutorial darkMode={darkMode}  />} />
        <Route path="/TypescriptTutorial" element={<TypescriptTutorial darkMode={darkMode}  />} />
        <Route path="/Csharp" element={<Csharp darkMode={darkMode} />} />
        <Route path="/Go" element={<GO darkMode={darkMode}/>} />
        <Route path="/Kotlin" element={<Kotlin darkMode={darkMode}/>} />
        <Route path="/Swift" element={<Swift darkMode={darkMode}/>} />
        <Route path="/CppTutorial" element={<CppTutorial darkMode={darkMode} />} />
        <Route path="/JavaTutorial" element={<JavaTutorial darkMode={darkMode} />} />
        <Route path="/pythonTutorial" element={<PythonTutorial darkMode={darkMode} />} />
        
        {/* <Route path="/OperatingSystemsTutorial" element={<OperatingSystemsTutorial darkMode={darkMode} />} />
        <Route path="/OrganizationTutorial" element={<OrganizationTutorial darkMode={darkMode} />} />
        <Route path="/NetworksTutorial" element={<NetworksTutorial darkMode={darkMode} />} />
        <Route path="/ComputationTutorial" element={<ComputationTutorial darkMode={darkMode} />} />
        <Route path="/CompilerTutorial" element={<CompilerTutorial darkMode={darkMode} />} />
        <Route path="/DistributedTutorial" element={<DistributedTutorial darkMode={darkMode} />} />
        <Route path="/LinuxTutorial" element={<LinuxTutorial darkMode={darkMode} />} />
        <Route path="/CyberSecurityTutorial" element={<CyberSecurityTutorial darkMode={darkMode} />} />
        <Route path="/DbmsTutorial" element={<DbmsTutorial darkMode={darkMode} />} />
        <Route path="/WarehousingTutorial" element={<WarehousingTutorial darkMode={darkMode} />} /> */}


        {/* Course Page */}
        <Route path="/FullStackCourse" element={<FullStackCourseMainPage darkMode={darkMode} />} />
        <Route path="/AIMLCourse" element={<AIMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/CSSCourse" element={<CSSCourseMainPage darkMode={darkMode} />} />
        <Route path="/DataEngineeringCourse" element={<DataEngineeringCourseMainPage darkMode={darkMode} />} />
        <Route path="/DSACourse" element={<AlgorithmCourseMainPage darkMode={darkMode} />} />
        <Route path="/AtoZCourse" element={<AtoZCourseMainPage darkMode={darkMode} />} />
        <Route path="/NextjsCourse" element={<NextjsCourseMainPage darkMode={darkMode} />} />
        <Route path="/ReactCourse" element={<ReactCourseMainPage darkMode={darkMode} />} />
        <Route path="/HTMLCourse" element={<HTMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavaCourse" element={<JavaCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavascriptCourse" element={<JavascriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/MernstackCourse" element={<MERNCourseMainPage darkMode={darkMode} />} />
        <Route path="/pythonCourse" element={<PythonCourseMainPage darkMode={darkMode} />} />
        <Route path="/typescriptCourse" element={<TypescriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/courseMain" element={<CourseMainPage darkMode={darkMode} />} />
        <Route path="/courses/ExploreAllComponent" element={<ExploreAllComponent darkMode={false}/>} />
        
       
        

        {/* <Route path="/cs-core" element={<CourseDetailPage />} />
        <Route path="/systems-networking" element={<CourseDetailPage />} />
        <Route path="/data-databases" element={<CourseDetailPage />} />
        <Route path="/data-science" element={<CourseDetailPage />} />
        <Route path="/programming-development" element={<CourseDetailPage />} />
        <Route path="/programming-languages" element={<CourseDetailPage />} />
        <Route path="/web-development" element={<CourseDetailPage />} />
        <Route path="/mobile-development" element={<CourseDetailPage />} />
        <Route path="/systems-programming" element={<CourseDetailPage />} />
        <Route path="/ai-research" element={<CourseDetailPage />} />
        <Route path="/game-development" element={<CourseDetailPage />} />
        <Route path="/scripting-automation" element={<CourseDetailPage />} /> */}
     
      </Routes>

      <Footer darkMode={darkMode}/>
    </Router>
  );
};

export default App;
