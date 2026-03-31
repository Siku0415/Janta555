import { event as pixelEvent } from './fpixel';
import { sendCAPIEvent } from './capi';
import { v4 as uuidv4 } from 'uuid';

export const trackEvent = (eventName: string, eventData: any = {}) => {
  const eventId = uuidv4();
  
  // 1. Send to Pixel (Client)
  pixelEvent(eventName, eventData, eventId);
  
  // 2. Send to CAPI (Server)
  sendCAPIEvent(eventName, eventId, eventData);
};
