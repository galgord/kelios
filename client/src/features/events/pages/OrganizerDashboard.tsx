import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMyEvents, onboardStripe } from '@/lib/api-client';
import { useState } from 'react';
import { Plus, CreditCard, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function OrganizerDashboard() {
  const navigate = useNavigate();
  const [isOnboarding, setIsOnboarding] = useState(false);

  const { data: events, isLoading, error } = useQuery({
    queryKey: ['my-events'],
    queryFn: getMyEvents,
  });

  const handleSetupPayouts = async () => {
    try {
      setIsOnboarding(true);
      const response = await onboardStripe();
      window.location.href = response.url;
    } catch (error) {
      console.error('Failed to start onboarding:', error);
      alert('Failed to start Stripe onboarding. Please try again.');
    } finally {
      setIsOnboarding(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm text-muted-foreground">Loading your events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm text-red-500">Failed to load events. Please try again.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Manage your events and payouts</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 mb-8 md:flex-row">
        <Button
          onClick={() => navigate('/events/new')}
          className="h-12"
        >
          <Plus size={20} strokeWidth={1.5} />
          Create Event
        </Button>
        <Button
          onClick={handleSetupPayouts}
          disabled={isOnboarding}
          variant="outline"
          className="h-12"
        >
          <CreditCard size={20} strokeWidth={1.5} />
          {isOnboarding ? 'Loading...' : 'Setup Payouts'}
        </Button>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Your Events</h2>

        {events && events.length === 0 ? (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-sm text-muted-foreground">
                You haven't created any events yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events?.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={16} strokeWidth={1.5} />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin size={16} strokeWidth={1.5} />
                    {event.venue}
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm font-semibold">
                      ${event.price.toFixed(2)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
