import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Prevent multiple injections
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69e8984547a5081c306487cc/1jmq95k4f';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
    } else {
        document.head.appendChild(s1);
    }
  }, []);

  // Tawk.to renders its own floating widget iframe globally, so we don't need to return any DOM elements here
  return null;
};

export default TawkToChat;
