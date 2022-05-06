//imports
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
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
                        <Route path="/" exact element={ <Profile /> }/>
                        <Route path="/messages" exact element={ <DialogsContainer/> }/>
                        <Route path="/users" exact element={ <Users/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
