// api/axiosBaseService.ts
import axios, { AxiosInstance } from 'axios';

// Create a base Axios instance
class BaseService {
  protected axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:5000/api', // Replace with your API base URL
      headers: {
        'Content-Type': 'application/json',
        // Add any global headers like Authorization if needed
      },
    });
  }

  // Method to send GET requests
  protected async get<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url);
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error; // Rethrow for higher-level handling
    }
  }

  // Method to send POST requests
  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  // Method to send delete requests
  protected async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error; // Rethrow for higher-level handling
    }
  }

  // Method to send put requests
  protected async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  // You can add other methods like PUT, DELETE, etc., if needed
}

export default BaseService;
