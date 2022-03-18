import axios from "axios";
import { getCookie } from "../shared/Cookie";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_WJ
});

// Teaming Server : http://???
//원진님 http://3.36.75.239
//민수님 http://175.204.78.166:3000

// Alter defaults after instance has been created
//api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

api.interceptors.request.use(function (config) {
  const accessToken = getCookie("token");
  config.headers.common["token"] = `${accessToken}`;
  //config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});

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

  getLoginUserInfo: () => api.get("/api/loginUser.json"),
};
