import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

//import { auth } from "../../shared/firebase";
//import firebase from "firebase/app";

// actions
//const LOG_IN = "LOG_IN";
//const KAKAO_LOG_IN = "KAKAO_LOG_IN"
const LOG_OUT = "LOG_OUT";
//const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_PROFILE_IMG = "SET_PROFILE_IMG";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
//const setProfileImg = createAction(SET_PROFILE_IMG, (imgUrl) => ({imgUrl}));
//const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
  profileImage:null,
};

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    
    

    //로그인 API 구현부


    // auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
    //   auth
    //     .signInWithEmailAndPassword(id, pwd)
    //     .then((user) => {
    //       console.log("loginFB : ",user);

    //       dispatch(
    //         setUser({
    //           user_name: user.user.displayName,
    //           id: id,
    //           user_profile: "",
    //           uid: user.user.uid,
    //         })
    //       );

    //       history.push("/");
    //     })
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;

    //       console.log(errorCode, errorMessage);
    //     });
    // });




  };
};

// redux > modules > user.js

// const kakaoLogin = (code) => {
//   return function (dispatch, getState, { history }) {
//     axios({
//       method: "GET",
//       url: `http://3.35.208.142/oauth/callback/kakao?code=${code}`,
//     })
//       .then((res) => {
//         console.log(res); // 토큰이 넘어올 것임
        
//         const ACCESS_TOKEN = res.data.accessToken;
        
//         localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
        
//         history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        
//         }.catch((err) => {
//         console.log("소셜로그인 에러", err);
//         window.alert("로그인에 실패하였습니다.");
//         history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
//         }
//     }
// };

const signUp = (id, user_name, pwd, pwdCheck, imgUrl) => {
  return function (dispatch, getState, { history }) {
    

    //회원가입 API 구현부



    // auth
    //   .createUserWithEmailAndPassword(id, pwd)
    //   .then((user) => {
    //     console.log(user);

    //     auth.currentUser
    //       .updateProfile({
    //         displayName: user_name,
    //       })
    //       .then(() => {
    //         dispatch(
    //           setUser({
    //             user_name: user_name,
    //             id: id,
    //             user_profile: "",
    //             uid: user.user.uid,
    //           })
    //         );
    //         history.push("/");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    //     // Signed in
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;

    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });


  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, {history}){
    
    
    
    //로그인 체크 구현부

    // auth.onAuthStateChanged((user) => {
    //   if(user){
    //     dispatch(
    //       setUser({
    //         user_name: user.displayName,
    //         user_profile: "",
    //         id: user.email,
    //         uid: user.uid,
    //       })
    //     );
    //   }else{
    //     dispatch(logOut());
    //   }
    // })



  }
}

const logoutFB = () => {
  return function (dispatch, getState, {history}) {
    
    //로그아웃 구현부 - 로그아웃에 있어 서버와 처리해야할 부분이 있는지 확인
    
    
    // auth.signOut().then(() => {
    //   dispatch(logOut());
    //   history.replace('/');
    // })


  }
}

// reducer
export default handleActions(
  {
    [SET_PROFILE_IMG]:(state, action) => 
      produce(state, (draft) => {

        draft.profileImage = action.payload.imgUrl;
        console.log("image save")
    })
    ,
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {


        // setCookie("is_login", "success");
        // draft.user = action.payload.user;
        // draft.is_login = true;


      })
      ,
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {


        // deleteCookie("is_login");
        // draft.user = null;
        // draft.is_login = false;


      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signUp,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
