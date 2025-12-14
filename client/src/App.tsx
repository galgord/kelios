import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MobileShell } from './components/layout/MobileShell';
import { EventsPage } from './features/events/pages/EventsPage';
import { ScanPage } from './features/scan/pages/ScanPage';
import { ProfilePage } from './features/profile/pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileShell />}>
          <Route index element={<Navigate to="/events" replace />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="scan" element={<ScanPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
