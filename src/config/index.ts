export interface AppConfig {
  webinar: {
    targetDate: string; // ISO date string
  };
  contact: {
    email: string;
  };
}

export const config: AppConfig = {
  webinar: {
    targetDate: '2025-09-15T19:00:00', 
  },
  contact: {
    email: 'q4nqyghxc8@privaterelay.appleid.com',
  },
};

export default config;
