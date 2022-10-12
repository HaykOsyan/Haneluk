import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Game from '../pages/Game';
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {/* <Route path='/' element={<h1>fdsfd</h1>}/> */}
            {user.isAuth && authRoutes.map(({path, Component}) => 
            // console.log(Component)
                <Route key={path} path={path} element ={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element ={<Component/>}/>
            )}
            <Route path="*" element={<Game/>}/>
        </Routes>
    );
};

export default AppRouter;