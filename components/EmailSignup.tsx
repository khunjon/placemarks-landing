import React, { useState } from 'react';
import { Mail, ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';

interface EmailSignupProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function EmailSignup({ 
  placeholder = "Enter your email",
  buttonText = "Get Early Access",
  className = ""
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || "Thanks! You're on the list.");
        setEmail(''); // Clear the input on success
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error state when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setMessage('');
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto email-signup-form ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="relative flex items-center">
            <div className="absolute left-4 z-10">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={placeholder}
              disabled={status === 'loading' || status === 'success'}
              className={`
                w-full pl-12 pr-4 py-4 bg-gray-900 border rounded-xl text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-200 email-input
                ${status === 'error' ? 'border-red-500 focus:ring-red-500' : 'border-gray-700'}
                ${status === 'success' ? 'border-green-500' : ''}
              `}
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`
              w-full mt-3 flex items-center justify-center py-4 px-6 rounded-xl font-medium
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
              ${status === 'success' 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
              }
            `}
          >
            {status === 'loading' && (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            )}
            {status === 'success' && (
              <Check className="w-5 h-5 mr-2" />
            )}
            {status !== 'loading' && status !== 'success' && (
              <ArrowRight className="w-5 h-5 ml-2" />
            )}
            
            {status === 'loading' && 'Subscribing...'}
            {status === 'success' && 'Subscribed!'}
            {status !== 'loading' && status !== 'success' && buttonText}
          </button>
        </div>

        {/* Status Messages */}
        {message && (
          <div className={`
            flex items-start space-x-2 p-3 rounded-lg text-sm
            ${status === 'success' 
              ? 'bg-green-900 bg-opacity-50 text-green-300 border border-green-700' 
              : 'bg-red-900 bg-opacity-50 text-red-300 border border-red-700'
            }
          `}>
            {status === 'success' ? (
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            )}
            <span>{message}</span>
          </div>
        )}
      </form>

      {/* Privacy note */}
      <p className="text-xs text-gray-500 mt-3 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
} 