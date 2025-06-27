import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      const response = await fetch('https://submit-form.com/3isznOX4R', {
        method: 'POST',
        body: formData,
      });
      
      // Formspark typically returns 200 for successful submissions
      // Let's also check for redirect responses (3xx) which might indicate success
      if (response.ok || (response.status >= 200 && response.status < 400)) {
        setStatus('success');
        setEmail('');
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Placemarks - Save, organize, and share your favorite places</title>
        <meta name="description" content="A beautiful list management tool for saving and sharing favorite places and places you want to go." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Prevent aggressive mobile caching */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Add timestamp to force cache invalidation */}
        <meta name="version" content={Date.now().toString()} />
        
        {/* iOS Safari specific no-cache */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #000000 50%, #0a0a0a 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* Coming Soon Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 24px',
        backgroundColor: 'rgba(234, 179, 8, 0.1)',
        border: '1px solid rgba(234, 179, 8, 0.3)',
        borderRadius: '50px',
        color: '#eab308',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '40px'
      }}>
        ⭐ Coming Soon - Join the Waitlist
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
        fontWeight: 'bold',
        lineHeight: '1.1',
        marginBottom: '30px',
        maxWidth: '800px'
      }}>
        Save, organize, and share your{' '}
        <span style={{ color: '#eab308' }}>favorite places</span>
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        color: '#d1d5db',
        lineHeight: '1.6',
        marginBottom: '50px',
        maxWidth: '600px'
      }}>
        A beautiful list management tool for places you love and want to visit. 
        Bookmark restaurants, cafes, and hidden gems to share with friends and family.
      </p>

      {/* Email Signup */}
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '60px'
      }}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          style={{
            padding: '16px 20px',
            fontSize: '16px',
            backgroundColor: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '12px',
            color: '#ffffff',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#eab308'}
          onBlur={(e) => e.target.style.borderColor = '#374151'}
        />
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          style={{
            padding: '16px 20px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: status === 'success' ? '#10b981' : '#eab308',
            color: '#000000',
            border: 'none',
            borderRadius: '12px',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: status === 'loading' ? 0.7 : 1,
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            if (status !== 'loading' && status !== 'success') {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = '#d97706';
              target.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseOut={(e) => {
            if (status !== 'loading' && status !== 'success') {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = '#eab308';
              target.style.transform = 'translateY(0)';
            }
          }}
        >
          {status === 'loading' && '⏳ Subscribing...'}
          {status === 'success' && '✅ Subscribed!'}
          {status !== 'loading' && status !== 'success' && 'Join the Waitlist'}
        </button>

                 {status === 'success' && (
           <p style={{ color: '#10b981', fontSize: '14px' }}>
             Thanks! You&apos;re on the list.
           </p>
         )}
        {status === 'error' && (
          <p style={{ color: '#ef4444', fontSize: '14px' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>



      {/* Footer */}
      <footer style={{
        marginTop: '80px',
        padding: '20px',
        borderTop: '1px solid #374151',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#eab308',
            marginBottom: '5px'
          }}>
            Placemarks
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            © 2025 Upper Sukhumvit. All rights reserved.
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Privacy</a>
          <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Terms</a>
          <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
        </div>
      </footer>
      </div>
    </>
  );
} 