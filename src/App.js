import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = ({state, dispatch, store}) => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" exact element={ <Profile store={ store }/> }/>
                        <Route path="/messages" exact element={ <DialogsContainer store={ store } dispatch={ dispatch }/> }/>
                        <Route path="/news" exact element={ 'news' }/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
