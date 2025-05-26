import React, { useEffect, useState } from 'react';

function useAutoRedirect(onRedirect: () => void, redirectionTime: number) {
  const [timer, setTimer] = useState(redirectionTime ); // 5 minutes in seconds
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer <= 0) {
      clearInterval(countdown);
      setIsRedirecting(true);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  useEffect(() => {
    if (isRedirecting) {
      // You can implement your redirection logic here, e.g., navigate to sign-in page
      // For demonstration, we are just logging the redirection action
      console.log('Redirecting to sign-in');
      onRedirect();
    }
  }, [isRedirecting]);

  const handleRetry = () => {
    // Implement your OTP resend logic here
    setTimer(redirectionTime); // Reset the timer when OTP is resent
  };

  return { handleRetry };
}

export default useAutoRedirect;
