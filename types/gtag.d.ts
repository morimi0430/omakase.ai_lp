declare global {
    interface Window {
      gtag?: (
        command: 'event',
        eventName: string,
        eventParams?: Record<string, any>
      ) => void;
      dataLayer?: any[];
    }
  }
  
  export {};