import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Game from "./pages/Game"
import Home from "./pages/Home"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, GAME_ROUTE, HOME_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    }
    
]

export const publicRoutes = [
    {
        path:HOME_ROUTE,
        Component: Home
    },
    {
        path:GAME_ROUTE,
        Component: Game
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    }
]