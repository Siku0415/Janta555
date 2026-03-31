const getCookie = (name: string) => {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

export const sendCAPIEvent = async (eventName: string, eventId: string, eventData: any = {}) => {
  try {
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        eventData,
        eventUrl: window.location.href,
        fbp,
        fbc
      }),
    });
  } catch (error) {
    console.error('CAPI Error:', error);
  }
};
