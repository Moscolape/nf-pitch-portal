import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Spinner } from "@chakra-ui/react";

// auth pages
const Login = lazy(() => import('@pages/auth/log-in'));
const VerifyEmail = lazy(() => import('@pages/auth/verify-email'));
const CreateAccount = lazy(() => import('@pages/auth/create-account'));


// main pages
const Overview = lazy(() => import('@pages/main/overview'));
const Dashboard = lazy(() => import('@pages/main/dashboard'));
const Panel = lazy(() => import('@pages/main/panel'));
const Pitch = lazy(() => import('@pages/main/pitch'));
const Survey = lazy(() => import('@pages/main/survey'));
const Reports = lazy(() => import('@pages/main/reports'));

// extra pages
const CandidateDetails = lazy(() => import('@components/pitch-components/candidates'))


function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <div className="">
          <Routes>
            {/* Routes for auth Pages */}
            <Route path="/" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/verify-email" element={<VerifyEmail />} />

            {/* Routes for main pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/reports" element={<Reports />} />

            {/* Extra Routes */}
            <Route path="/pitch/candidate/:id" element={<CandidateDetails />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;