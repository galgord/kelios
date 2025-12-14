import { Outlet, Link, useLocation } from 'react-router-dom';
import { Calendar, User, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileShell() {
  const location = useLocation();

  const navItems = [
    { to: '/events', icon: Calendar, label: 'Events' },
    { to: '/scan', icon: QrCode, label: 'Scan' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-background px-4 py-4">
        <h1 className="text-xl font-bold">ConfConnect</h1>
      </header>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
