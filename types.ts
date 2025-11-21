// FIX: Import React to resolve the 'Cannot find namespace React' error.
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  // FIX: Add optional 'seasonal' property to align with its usage in App.tsx
  seasonal?: boolean;
}

export interface ContactOption {
  id: string;
  label: string;
  subLabel?: string;
  icon: React.ElementType;
  action: () => void;
  colorClass: string;
  bgClass: string;
}

export enum InquiryType {
  BULK = 'Bulk Manufacturing',
  CORPORATE = 'Corporate Gifting',
  RETAIL = 'Retail/Wholesale',
  PRIVATE_LABEL = 'Private Label',
  OTHER = 'Other'
}