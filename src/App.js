//css
import './App.css'
//imports
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Test from "./components/test";


const App = () => {
    return (
        <>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/profile/*' element={ <ProfileContainer/> }/>
                        <Route path="/profile/*" element={ <ProfileContainer/> }/>
                        <Route path="/messages" exact element={ <DialogsContainer/> }/>
                        <Route path="/users" exact element={ <UsersContainer/> }/>
                        <Route path="/test" exact element={ <Test/> }/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
