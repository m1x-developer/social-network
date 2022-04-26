import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" exact
                               element={<Profile data={props.state.Profile.myPosts} addPost={props.addPost}/>}/>
                        <Route path="/messages" exact element={<Dialogs data={props.state.Dialogs}/>}/>
                        <Route path="/news" exact element={'news'}/>
                    </Routes>
                </div>

            </div>
        </>
    )
}

export default App
