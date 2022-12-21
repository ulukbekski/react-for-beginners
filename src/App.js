
import './index.scss'
import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { fakeAuthProvider } from './auth';


const Public = () => <h3>Публичная часть сайта </h3>
const Private = () => <h3>Очень приватная часть сайта💀💀💀💀💀</h3>
const Border = ({ children }) => <div className='border'>{children}</div>



export default function App() {
  return (
    <AuthProvider>
      <div className="App">

        <h1>Пример аутентификации</h1>

        <p>В этом примере демонстрируется простой процесс входа в систему с тремя страницами:
          страница, защищенная страница и страница входа. Для того, чтобы увидеть защищенный
          страницу, вы должны сначала войти в систему. Довольно стандартные вещи.
        </p>

        <p>Во-первых, посетите общедоступную страницу. Затем посетите защищенную страницу.
          Вы еще не вошли в систему, поэтому будете перенаправлены на страницу входа.
          После входа вы будете перенаправлены обратно на защищенную страницу.
        </p>

        <p>
          Обратите внимание на изменение URL-адреса каждый раз. Если вы нажмете кнопку «Назад» в этом
          точка, вы ожидаете вернуться на страницу входа? Нет! ты уже
          вошли в систему. Попробуйте, и вы увидите, что вы вернетесь на страницу, которую вы
          посетил только *перед* входом в систему общедоступную страницу.
        </p>

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Border><Public /></Border>} />
            <Route path='/private' element={<Border><Private /></Border>} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
const Layout = () =>
  <ul>
    <AuthStatus/>
    <li>
      <Link to="/">Публичная страница</Link>
    </li>
    <li>
      <Link to="/private">Приватная страница</Link>
    </li>
    <Outlet />
  </ul>

const AuthContext = React.createContext(null)

function AuthProvider({ children }) {

  const [user, setUser] = React.useState(null)

  const signin = (newUser) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
    })
  }

  const signout = () => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }

  const useAuth = () => {
    return React.useContext(AuthContext)
  }
  
  function AuthStatus(){
    const auth = useAuth()
    const navigate = useNavigate();
    
    if(!auth.user){
      return (<h3>U r not logged in</h3>)
    }

    return(
      <p>
        Welocome {auth.user}
        <button
        onClick={()=>{
          auth.signout(()=> navigate('/'))
        }}>
          Sign out
        </button>
      </p>
    )
  }


  function RequireAuth({children}){
    const auth = useAuth()
    const location = useLocation()

    if(!auth.user){
      return <Navigate to="/login" state={{from : location}}   replace />
    }
  }





