import { supabase } from './supabase';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function getAuthHeaders() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error('No authentication token found');
  }

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${session.access_token}`,
  };
}

export interface CreateEventData {
  title: string;
  description: string;
  date: string;
  price: number;
  venue: string;
}

export interface Event {
  id: string;
  organizerId: string;
  title: string;
  description: string;
  date: string;
  price: number;
  venue: string;
  stripeAccountId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OnboardResponse {
  url: string;
  accountId?: string;
  isMock?: boolean;
}

// Event API methods
export async function createEvent(data: CreateEventData): Promise<Event> {
  const headers = await getAuthHeaders();

  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create event');
  }

  return response.json();
}

export async function getMyEvents(): Promise<Event[]> {
  const headers = await getAuthHeaders();

  const response = await fetch(`${API_URL}/events/organizer`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }

  return response.json();
}

// Payment API methods
export async function onboardStripe(): Promise<OnboardResponse> {
  const headers = await getAuthHeaders();

  const response = await fetch(`${API_URL}/payments/onboard`, {
    method: 'POST',
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to start Stripe onboarding');
  }

  return response.json();
}
