import axios from "axios";
import { getCookie } from "../shared/Cookie";

export const api = axios.create({
  baseURL: "https://wonjinlee.shop"
});

export const apiMS = axios.create({
  baseURL: "http://175.204.78.166:5000"
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

  joinProjectAPI: (projectId) => api.get(`/projects/${projectId}`),
  postClosed: (projectId) => api.post(`/projects/start/${projectId}`),
  postInvolvedIn:(projectId, involved) => api.post(`projects/projectIn/${projectId}`),
  postInvolvedOut:(projectId, involved) => api.post(`projects/projectOut/${projectId}`),

};
