'use client';

import { trackEvent } from '@/lib/track';
import React from 'react';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventData?: any;
}

export default function TrackedLink({ eventName, eventData, onClick, ...props }: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventData);
    if (onClick) {
      onClick(e);
    }
  };

  return <a onClick={handleClick} {...props} />;
}
