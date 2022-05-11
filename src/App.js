//imports
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import TestConrainer from "./components/testConrainer";
//css
import './App.css'



const App = () => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile/*"  element={ <ProfileContainer/> }/>
                        <Route path="/messages" exact element={ <DialogsContainer/> }/>
                        <Route path="/users" exact element={ <UsersContainer/> }/>
                        <Route path="/test" exact element={ <TestConrainer/> }/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
