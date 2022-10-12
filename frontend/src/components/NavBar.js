import React, { useContext } from 'react';
import { Context } from '..';
import { Nav,Navbar, Container, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, GAME_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer ( () => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={GAME_ROUTE}>Play</NavLink>
                {user.isAuth?
                    <Nav className="me-auto">
                        <Button 
                            className="mr-3" 
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Admin Panel                            
                        </Button>
                        <Button 
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Logout
                            
                        </Button>
                    </Nav>
                    :
                    <Nav className="me-auto">
                        <Button onClick={() => history(LOGIN_ROUTE)} variant={"outline-light"}>Login</Button>
                    </Nav>
                }
                
            </Container>
      </Navbar>
    );
});

export default NavBar;