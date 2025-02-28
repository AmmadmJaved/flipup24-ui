// api/userService.ts
import BaseService from './BaseService';

class UserService extends BaseService {
  // Fetch all users
  public async getAllUsers() {
    return this.get('/users/'); // Example endpoint to fetch all users
  }

  // Fetch a single user by ID
  public async getUserById(id: string) {
    return this.get(`/users/${id}`);
  }

  public  async editUser(id: string, updatedData: any) {
    const response = this.put(`/users/${id}`, updatedData);
    return response;
  }

  public async deleteUser (id: string) {
    const response = await this.delete(`/users/${id}`);
    return response;
  }
};

export default new UserService(); // Export an instance for easy use
