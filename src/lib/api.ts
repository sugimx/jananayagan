const API_BASE_URL = 'https://jananayagan-backend.vercel.app/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isProfileComplete: boolean;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  error?: unknown;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T> | ApiError> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      };

      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'An error occurred',
          error: data,
        };
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: 'Network error occurred',
        error,
      };
    }
  }

  async login(credentials: LoginRequest): Promise<ApiResponse<User> | ApiError> {
    return this.request<User>('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: RegisterRequest): Promise<ApiResponse<User> | ApiError> {
    return this.request<User>('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getProfile(token: string): Promise<ApiResponse<User> | ApiError> {
    return this.request<User>('/users/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async googleLogin(accessToken: string): Promise<ApiResponse<User> | ApiError> {
    return this.request<User>('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ accessToken }),
    });
  }
}

export const apiService = new ApiService(API_BASE_URL);
