import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" exact element={<Profile/>}/>
                        <Route path="/messages" exact element={<Dialogs/>}/>
                        <Route path="/news" exact element={'news'}/>
                    </Routes>
                </div>

            </div>
        </>
    )
}

export default App
