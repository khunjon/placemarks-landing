import { NextApiRequest, NextApiResponse } from 'next';

interface ConvertKitResponse {
  subscription?: {
    id: number;
    state: string;
    source: string;
    referrer: string | null;
    subscribable_id: number;
    subscribable_type: string;
    created_at: string;
  };
  error?: string;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Kit (ConvertKit) API configuration
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit environment variables not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Submit to ConvertKit
    const convertKitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
        }),
      }
    );

    const convertKitData: ConvertKitResponse = await convertKitResponse.json();

    if (!convertKitResponse.ok) {
      console.error('ConvertKit API error:', convertKitData);
      return res.status(400).json({ 
        error: convertKitData.message || 'Failed to subscribe' 
      });
    }

    // Optional: Store backup in Supabase
    // Uncomment and configure if you want to store a backup copy
    /*
    try {
      const supabaseResponse = await fetch(
        `${process.env.SUPABASE_URL}/rest/v1/email_subscribers`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
            'apikey': process.env.SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            email: email,
            source: 'landing_page',
            convertkit_subscription_id: convertKitData.subscription?.id,
            created_at: new Date().toISOString(),
          }),
        }
      );

      if (!supabaseResponse.ok) {
        console.error('Supabase backup failed, but ConvertKit succeeded');
      }
    } catch (supabaseError) {
      console.error('Supabase backup error:', supabaseError);
      // Don't fail the request if backup fails
    }
    */

    return res.status(200).json({ 
      success: true, 
      message: "Thanks! You're on the list." 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      error: 'Something went wrong. Please try again.' 
    });
  }
} 