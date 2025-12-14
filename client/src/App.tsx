import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { MobileShell } from './components/layout/MobileShell';
import { LoginPage } from './features/auth/pages/LoginPage';
import { EventsPage } from './features/events/pages/EventsPage';
import { OrganizerDashboard } from './features/events/pages/OrganizerDashboard';
import { CreateEventPage } from './features/events/pages/CreateEventPage';
import { ScanPage } from './features/scan/pages/ScanPage';
import { ProfilePage } from './features/profile/pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MobileShell />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/events" replace />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="dashboard" element={<OrganizerDashboard />} />
            <Route path="scan" element={<ScanPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route
            path="/events/new"
            element={
              <ProtectedRoute>
                <CreateEventPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
