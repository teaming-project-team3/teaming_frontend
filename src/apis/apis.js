import axios from "axios";
import { getCookie } from "../shared/Cookie";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_WJ
});

export const apiMS = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_MS
})

api.interceptors.request.use(function (config) {
  const accessToken = getCookie("token");
  config.headers.common["Authorization"] = `${accessToken}`;
  //config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});

apiMS.interceptors.request.use(function (config) {
  const accessToken = getCookie("token");
  config.headers.common["Authorization"] = `${accessToken}`;
  //config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});

export const apisMS = {
  
  loadProjectsMain: () => apiMS.get("/boards"),
  getProjectDetailAPI: (boardId) => apiMS.get(`/boards/${boardId}`),
  //createProject
  createProjectAPI: (data) => apiMS.post("/boards", data),
  loadProjectsCatMain: (category, page) => apiMS.get(`/boards/category/${category}/${page}`),

}

export const apis = {

  //createProject

  // like
  addLike: (postId) => api.post(`/api/post/${postId}/like`),
  cancelLike: (postId) => api.delete(`/api/post/${postId}/like`),

  // user
  kakaoSend: (code) => api.get(`/auth/kakao/redirect?code=${code}`),
  signup: (data) => api.post("/auth/signup", data),
  login: (data) => api.post("/auth/signin", data ),
  survey: (data) => api.post("/users/suvey", data),
  updateUserInfo: (data) => api.put("/users", data),

  getUserPage: (userId) => api.get(`/users/${userId}`),
  getMyStatsAPI: () => api.get("/users/mypage"),

  loadProjectsMain: () => api.get("/boards"),
  getProjectDetailAPI: (boardId) => api.get(`/boards/${boardId}`),
  createProjectAPI: (data) => api.post("/boards", data),
  updateProjectAPI: (data, boardId) => api.put(`/boards/${boardId}`, data),
  deleteProjectAPI: (projectId) => api.delete(`/boards/${projectId}`),
  loadProjectsCatMain: (category, page) => api.get(`/boards/category/${category}/${page}`),
  postClosed: (projectId) => api.post(`/boards/postClosed/${projectId}`),
  postInvolved:(projectId, involved) => api.post(`boards/postInvolved/${projectId}`, involved),

};
