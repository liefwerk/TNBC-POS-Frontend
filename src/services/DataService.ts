import http from "@/http-common";
import store from '@/store'

let _token = store.state.bearerToken;
class DataService {
  loginUser(data: any): Promise<any> {
    return http.post("/login", data);
  }

  logoutUser(token: string): Promise<any> {
    const body = {};
    return http.post("/logout", body, { headers: { "Authorization": `Bearer ${token}` } });
  }

  forgotPassword(data: any): Promise<any> {
    return http.post("/forgot-password", data);
  }

  resetPassword(data: any): Promise<any> {
    return http.post("/reset-password", data);
  }

  listUsers(url: any, token: any): Promise<any> {
    return http.get(`${url}`, { headers: { "Authorization": `Bearer ${token}` } });
  }

  addUser(data: any, token: any): Promise<any> {
    return http.post("/register", data, { headers: { "Authorization": `Bearer ${token}` } });
  }

  updateUser(data: any, id: number): Promise<any> {
    return http.put(`/userUpdate/${id}`, data, { headers: { "Authorization": `Bearer ${_token}` } });
  }
  
  deleteUser(user_id: number, token: any): Promise<any> {
    return http.delete(`/userDelete/${user_id}`, { headers: { "Authorization": `Bearer ${token}` } });
  }

  listUserProfile(id: number, token: any): Promise<any> {
    return http.get(`/userProfile/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
  }

  addUserProfile(data: any): Promise<any> {
    return http.post('/userProfileCreate', data, { headers: { "Authorization": `Bearer ${_token}` } });
  }
  
  updateUserProfile(data: any, user_id: number): Promise<any> {
    return http.post(`/userProfileUpdate/${user_id}`, data, { headers: { "Authorization": `Bearer ${_token}` } });
  }
  
  listRoles(token: any): Promise<any> {
    return http.get('/roleList', { headers: { "Authorization": `Bearer ${token}` } });
  }

  updateRole(data: any, user_id: number, token: any): Promise<any> {
    return http.put(`/roleUpdate/${user_id}`, data, { headers: { "Authorization": `Bearer ${token}` } });
  }

  addRole(data: any): Promise<any> {
    return http.post('/roleCreate', data, { headers: { "Authorization": `Bearer ${_token}` } });
  }

  deleteRole(id: number, token: any): Promise<any> {
    return http.delete(`/roleDelete/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
  }

  requestEmailVerification(data: any, token: any): Promise<any> {
    return http.post('/email/verification-notification', data, { headers: { "Authorization": `Bearer ${token}` } });
  }

  verifyEmail(path: any): Promise<any> {
    return http.get(`${path}`, { headers: { "Authorization": `Bearer ${_token}` } });
  }
}

export default new DataService();
