const REST_API_KEY = "287fd6eb3a0becf730048a4231717d37"

const REDIRECT_URI = "http://localhost:3000/oauth/kakao/redirect"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`


