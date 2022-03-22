/* eslint-disable */
import React from 'react'
// import logo from './logo.svg'
import './App.css'
// import { useTranslation } from 'react-i18next'
import authStatus from './routes/AuthStatus/AuthStatus'
import { authStatusContext } from './routes/AuthStatus/AuthStatusProvider'
import ProtectedRoute from './routes/ProtectedRoute'
import { Routes, Route, HashRouter } from 'react-router-dom'

const App: React.FC = () => {
  // const { t, i18n } = useTranslation()
  // const [lang, setLang] = useState<string>('zh-TW')
  // useEffect(() => {
  //   if (lang !== null) i18n.changeLanguage(lang)
  // }, [lang])

  return (
    <HashRouter>
      <authStatusContext.Provider value={authStatus}>
        <Routes>

          {/* <Route path={'/'} element={<ProtectedRoute level={1} />} >
            <Route path={'/'} element={<Home />} >
              <Route path={'/'} element={<ApplocatopmStatus />} ></Route>
              <Route path={'/application'} element={<ApplicationPage />} ></Route>
              <Route path={'/dashboard'} element={<ProtectedRoute level={2} />} >
                <Route path={'/dashboard'} element={<Dashboard />} ></Route>
              </Route>
              <Route path={'/permissionDenied'} element={<PermissionDenied />} ></Route>
            </Route>
          </Route>

          <Route path={'/login'} element={<LogIn />} ></Route>
          <Route path={'/loading'} element={<Loading />} ></Route>
          <Route path={'/passwordreset'} element={<PasswordReset />} ></Route>
          <Route path={'/permissionDenied'} element={<PermissionDenied />} ></Route>
          <Route path="*" element={<NoMatch />} /> */}

        </Routes>
      </authStatusContext.Provider>
    </HashRouter>
  )
}

export default App
