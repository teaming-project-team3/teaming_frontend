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
  //const accessToken = getCookie("token");
  const accessToken = sessionStorage.getAttribute("token");//세션 read
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
  createProject: (data) => api.post("/boards", data),

  // post
  post: (lastpost, number) => api.get(`/api/post?lastpost=${lastpost}&number=${number}`),
  postDetail: (postId) => api.get(`/api/post/${postId}`),
  add: (data) => api.post("/api/post", data),
  delete: (postId) => api.delete(`/api/post/${postId}`),
  edit: (postId, data) => api.put(`/api/post/${postId}`, data),

  // comment
  // alarm: () => api.get("/api/alarm"),
  // addComment: (postId, text) => api.post(`/api/comment/${postId}`, {text}),
  // editComment: (postId, commentId, text) => api.put(`/api/comment/${postId}/${commentId}`, {text}),
  // deleteComment: (postId, commentId) => api.put(`/api/comment/${postId}/${commentId}`),

  // like
  addLike: (postId) => api.post(`/api/post/${postId}/like`),
  cancelLike: (postId) => api.delete(`/api/post/${postId}/like`),

  // user
  kakaoSend: (code) => api.get(`/auth/kakao/redirect?code=${code}`),
  signup: (data) => api.post("/auth/signup", data),
  login: (data) => api.post("/auth/signin", data ),
  survey: (data) => api.post("/users/suvey", data),
  updateUserInfo: (data) => api.put("/users", data),


  loadProjectsMain: () => api.get("/boards"),
  getProjectDetailAPI: (boardId) => api.get(`/boards/${boardId}`),


  getMyStatsAPI: () => api.get("/users/mypage"),
};
