// api/userService.ts
import BaseService from './BaseService';

class RequestService extends BaseService {
  // Fetch all users
  public async getAll() {
    return this.get('/request/'); // Example endpoint to fetch all users
  }

  // Fetch a single user by ID
  public async getRequestById(id: string) {
    return this.get(`/request/${id}`);
  }

  public async createServiceRequest( requestData: any) {
    const response = this.post(`/request/create`, requestData);
    return response;
  }

  public async acceptServiceRequest (id: string) {
    const response = await this.delete(`/accept/${id}`);
    return response;
  }
};

export default new RequestService(); // Export an instance for easy use
