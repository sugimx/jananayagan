import { apiService } from './api';

export const testLogin = async () => {
  try {
    const response = await apiService.login({
      email: 'john@example1.com',
      password: 'password123'
    });
    
    console.log('Login test result:', response);
    return response;
  } catch (error) {
    console.error('Login test error:', error);
    return null;
  }
};

export const testRegister = async () => {
  try {
    const response = await apiService.register({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      phone: '+1234567890'
    });
    
    console.log('Register test result:', response);
    return response;
  } catch (error) {
    console.error('Register test error:', error);
    return null;
  }
};

