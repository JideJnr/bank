import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/auth'
import Suspence from './component/Suspence';

const Schedule  = lazy(() => import('./client/component/transfer/schedule/Schedule'));
const Quick  = lazy(() => import('./client/component/transfer/quick/Quick'));
const Merchant  = lazy(() => import('./client/component/transfer/merchant/Merchant'));
const Bill  = lazy(() => import('./client/component/transfer/bill/Bill'));
const Card  = lazy(() => import('./client/component/settings/card/Card'));
const Legal  = lazy(() => import('./client/component/settings/legal/Legal'));
const Terms  = lazy(() => import('./pages/Terms'));

const Statement  = lazy(() => import('./client/component/settings/statement/Statement'));
const Token  = lazy(() => import('./client/component/settings/security/Token'));
const ChangePassword  = lazy(() => import('./client/component/settings/security/ChangePassword'));
const ChangeEmail  = lazy(() => import('./client/component/settings/security/ChangeEmail'));
const Main  = lazy(() => import('./pages/Main'));
const Security  = lazy(() => import('./client/component/settings/security/Security'));
const BeneficiariesList  = lazy(() => import('./client/component/settings/beneficiary/BeneficiariesList'));
const ServerHistoryDetail  = lazy(() => import('./server/component/serverDashboard/clientDashboard/clientTransactions/HistoryDetails'));
const OTP =  lazy(() => import('./client/OTP'));
const Test  = lazy(() => import('./test/Test'));
const Beneficiaries  = lazy(() => import('./client/component/settings/beneficiary/Beneficiaries'));
const Transfer  = lazy(() => import('./client/component/transfer/transfer/Transfer'));
const CAccount  = lazy(() => import('./client/component/welcome/Account'));
const CDisplay  = lazy(() => import('./client/component/welcome/Display'));
const CFinish  = lazy(() => import('./client/component/welcome/Finish'));
const CPopup  = lazy(() => import('./client/component/welcome/Popup'));
const CNumber  = lazy(() => import('./client/component/welcome/Number'));
const CWelcome = lazy(() => import('./client/component/welcome/Welcome'));
const CTransaction = lazy(() => import('./client/component/welcome/Transaction'));
const CSignIn  = lazy(() => import('./client/component/SigninForm'));
const CSignUp  = lazy(() => import('./client/pages/SignUp'));
const SSignIn  = lazy(() => import('./server/pages/SignIn'));
const SSignUp  = lazy(() => import('./server/pages/SignUp'));
const Server  = lazy(() => import('./server/pages/Server'));
const ServerClientDashboard  = lazy(() => import('./server/component/serverDashboard/clientDashboard/ServerClientDashboard'));
const ClientDashboard  = lazy(() => import('./client/component/ClientDashboard'));
const ServerChatContainer  = lazy(() => import('./server/component/Chat/ChatContainer'));
const ClientChat  = lazy(() => import('./client/component/Contact/Chat/Chat'));
const HistoryDetails  = lazy(() => import('./client/component/home/HistoryDetails'));
const CHistoryDetails  = lazy(() => import('./client/component/home/clientTransactions/ClientTransaction'));



function App() {
  return (

  <AuthProvider>
      <BrowserRouter>      
        <Suspense fallback={<Suspence/>}>
        
          <Routes>
          <Route path='/trm' element={<Terms/>}/>
          <Route path='/cwc' element={<CWelcome/>}/>
          <Route path='/cac' element={<CAccount/>}/>
          <Route path='/cds' element={<CDisplay/>}/>
          <Route path='/cnm' element={<CNumber/>}/>
          <Route path='/ctr' element={<CTransaction/>}/>
          <Route path='/cpp' element={<CPopup/>}/>
          <Route path='/cfn' element={<CFinish/>}/>
          <Route path='/tst' element={<Test/>}/>
          <Route path='/scc' element={<ServerChatContainer/>}/>
          <Route path='/ccc' element={<ClientChat/>}/>
          <Route path='/scd' element={<ServerClientDashboard/>}/>
          <Route path='/trf' element={<Transfer/>}/>
          <Route path='/bnf' element={<Beneficiaries/>}/>
          <Route path='/bnfl' element={<BeneficiariesList/>}/>
          <Route path='/otp' element={<OTP/>}/>
          <Route path='/shd' element={<ServerHistoryDetail/>}/>
          <Route path='/hd' element={<HistoryDetails/>}/>
          <Route path='cd/chd' element={<CHistoryDetails/>}/>
          <Route path='scr' element={<Security/>}/>
          <Route path='crd' element={<Card/>}/>
          <Route path='chm' element={<ChangeEmail/>}/>
          <Route path='chp' element={<ChangePassword/>}/>
          <Route path='htk' element={<Token/>}/>
          <Route path='stt' element={<Statement/>}/>
          <Route path='lgl' element={<Legal/>}/>
          <Route path='qck' element={<Quick/>}/>
          <Route path='bll' element={<Bill/>}/>
          <Route path='sch' element={<Schedule/>}/>
          <Route path='mch' element={<Merchant/>}/>

























            <Route path='/' element={<Main/>}/>
            <Route path='/ssp' element={<SSignUp/>}/>
            <Route path='/ssn' element={<SSignIn/>}/>
            <Route path='/csp' element={<CSignUp/>}/>
            <Route path='/csn' element={<CSignIn/>}/>
            <Route path='/cd' element={<ClientDashboard/>}/>
            <Route path='/sd' element={<Server/>}/>
            <Route path='/scd' element={<ServerClientDashboard/>}/>

            <Route path='/*'element={<p>404 notfound</p>}/> 
          </Routes>

        </Suspense>
    </BrowserRouter>
  </AuthProvider>
    
  );
}

export default App;