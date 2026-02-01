// Updated to remove missing vite/client types and add process.env typing for API Key access
declare const process: {
  env: {
    API_KEY: string;
    [key: string]: any;
  }
};
