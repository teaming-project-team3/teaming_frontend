import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../apis/apis";
import { setCookie } from "../../shared/Cookie";

// actions
//const LOG_IN = "LOG_IN";
//const KAKAO_LOG_IN = "KAKAO_LOG_IN"
const LOG_OUT = "LOG_OUT";
//const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_PROFILE_IMG = "SET_PROFILE_IMG";
const RESET_ABILITY = "reset/Ability";
const UPDATE_ABILITY = "update/Ability";
const RESET_SKILLS = "reset/Skills";
const UPDATE_SKILLS = "update/Skills";
const DELETE_ABILITY = "delete/Ability";
const DELETE_SKILLS = "delete/Skills";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
//const setProfileImg = createAction(SET_PROFILE_IMG, (imgUrl) => ({imgUrl}));
//const setUser = createAction(SET_USER, (user) => ({ user }));
const resetAbilityAction = createAction(RESET_ABILITY, (item) => ({ item }));
const updateAbilityAction = createAction(UPDATE_ABILITY, (data) => ({ data }));
const resetSkillsAction = createAction(RESET_SKILLS, (item) => ({ item }));
const updateSkillsAction = createAction(UPDATE_SKILLS, (data) => ({ data }));
const deleteAbilityAction = createAction(DELETE_ABILITY, (data) => ({ data }));
const deleteSkillsAction = createAction(DELETE_SKILLS, (data)=>({ data }))

// initialState
const initialState = {
  user: null,
  is_login: false,
  surveyChecker: false,
  profileImage: null,
  abilityFront: [],
  skillsFront: [],
  abilityBack: [],
  skillsBack: [],
  abilityDesigner: [],
  skillsDesigner: [],
  myProjects: [],
};

export function resetAbility(item, position) {
  console.log("액션을 생성할거야!", item);
  return { type: RESET_ABILITY, item: item, position: position };
}

export function resetSkills(skill, position) {  
  console.log("액션을 생성할거야!", skill);
  return { type: RESET_SKILLS, item: skill, position: position };
}

export function updateSkills(data, idx, position) {
  console.log("액션을 생성할거야!", data);
  return { type: UPDATE_SKILLS, data: data, idx: idx, position: position };
}

export function updateAbility(data, idx, position) {
  console.log("액션을 생성할거야!", data);
  return { type: UPDATE_ABILITY, data: data, idx: idx, position: position };
}

export function deleteAbility(data, position) {
  console.log("액션을 생성할거야!", data);
  return { type: DELETE_ABILITY, data: data, position: position };
}

export function deleteSkills(data, position) {
  console.log("액션을 생성할거야!", data);
  return { type: DELETE_SKILLS, data: data, position: position };
}

export const resetAbilityAPI = (arrAbility) => {
  return async function (dispatch) {
    //dispatch(isLoaded(false));
    //const docRef = await addDoc(collection(db, "word"), word);
    //const word_data = { id: docRef.id, ...word };

    console.log("addAbility : ", arrAbility);
    dispatch(resetAbility(arrAbility));
  };
};

export const updateAbilityAPI = (data, idx) => {
  return async function (dispatch) {
    //dispatch(isLoaded(false));
    //const docRef = await addDoc(collection(db, "word"), word);
    //const word_data = { id: docRef.id, ...word };

    console.log("updateAbility : ", data);
    dispatch(updateAbility(data, idx));
  };
};

// middleware actions
const loginAPI = (id, pwd, callback) => {
  return function ({history}) {
    //로그인 API 구현부

    const data = {
      email: id,
      password: pwd,
    };

    apis
      .login(data)
      .then((res) => {
        localStorage.setItem("userId", id);
        setCookie("token", res.data.data.Authorization, 1);
        console.log("login completed", res);

        //surveyChecker 받아서 넘기기
        callback(true);
      })
      .catch((err) => {
        console.log("login err : ", err);
        window.alert("로그인 실패!", err);
      });

      return;
  };
};


const signUp = (data, callback) => {
  return function () {

    //회원가입 API 구현부
    apis
      .signup(data)
      .then((res) => {
        console.log("signup completed", res);
        callback();
      })
      .catch((err) => {
        console.log("signup err : ", err);
        window.alert("잠시 후 다시 시도해주세요!")
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
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
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    //로그아웃 구현부 - 로그아웃에 있어 서버와 처리해야할 부분이 있는지 확인
    // auth.signOut().then(() => {
    //   dispatch(logOut());
    //   history.replace('/');
    // })
  };
};

const surveyAPI = (data, callback) => {
  return function () {

    apis
      .survey(data)
      .then((res)=>{

        console.log("success", res)
        callback();
      })
      .catch((err)=>{
        console.log("err",err)
      })




  }
}

// reducer
export default handleActions(
  {
    [SET_PROFILE_IMG]: (state, action) =>
      produce(state, (draft) => {
        draft.profileImage = action.payload.imgUrl;
        console.log("image save");
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        // draft.user = action.payload.user;
        // draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
        // draft.user = null;
        // draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),

    [RESET_ABILITY]: (state, action) =>
      produce(state, (draft) => {
        
        if(parseInt(action.position)===1){
          const result = [...state.abilityFront, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.abilityFront = result;
        }else if(parseInt(action.position)===2){
          const result = [...state.abilityBack, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.abilityBack = result;
        }else if(parseInt(action.position)===3){
          const result = [...state.abilityDesigner, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.abilityDesigner = result;
        }

      }),

    [UPDATE_ABILITY]: (state, action) =>
      produce(state, (draft) => {
        if(parseInt(action.position)===1){
          const new_ability = state.abilityFront.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.abilityFront = new_ability;

        }else if(parseInt(action.position)===2){
          const new_ability = state.abilityBack.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.abilityBack = new_ability;
        }else if(parseInt(action.position)===3){
          const new_ability = state.abilityDesigner.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.abilityDesigner = new_ability;
        }

      }),

    [DELETE_ABILITY]: (state, action) =>
      produce(state, (draft) => {
        console.log("before Delete");

        if(parseInt(action.position)===1){
          draft.abilityFront = draft.abilityFront.filter((l, idx) => {
            return action.data !== l.name;
          });
        }else if(parseInt(action.position)===2){
          draft.abilityBack = draft.abilityBack.filter((l, idx) => {
            return action.data !== l.name;
          });
        }else if(parseInt(action.position)===3){
          draft.abilityDesigner = draft.abilityDesigner.filter((l, idx) => {
            return action.data !== l.name;
          });
        }

        console.log("after Delete");
      }),

    [RESET_SKILLS]: (state, action) =>
      produce(state, (draft) => {
        if(parseInt(action.position)===1){
          const result = [...state.skillsFront, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.skillsFront = result;
        }else if(parseInt(action.position)===2){
          const result = [...state.skillsBack, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.skillsBack = result;
        }else if(parseInt(action.position)===3){
          const result = [...state.skillsDesigner, {name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.skillsDesigner = result;
        }
      }),

    [UPDATE_SKILLS]: (state, action) =>
      produce(state, (draft) => {
        if(parseInt(action.position)===1){
          const new_ability = state.skillsFront.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.skillsFront = new_ability;

        }else if(parseInt(action.position)===2){
          const new_ability = state.skillsBack.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.skillsBack = new_ability;
        }else if(parseInt(action.position)===3){
          const new_ability = state.skillsDesigner.map((l, idx) => {
            if (parseInt(action.idx) === idx) {
              return action.data;
            } else {
              return l;
            }
          });
  
          draft.skillsDesigner = new_ability;
        }
      }),

      [DELETE_SKILLS]: (state, action) =>
      produce(state, (draft) => {
        if(parseInt(action.position)===1){
          draft.skillsFront = draft.skillsFront.filter((l, idx) => {
            return action.data !== l.name;
          });
        }else if(parseInt(action.position)===2){
          draft.skillsBack = draft.skillsBack.filter((l, idx) => {
            return action.data !== l.name;
          });
        }else if(parseInt(action.position)===3){
          draft.skillsDesigner = draft.skillsDesigner.filter((l, idx) => {
            return action.data !== l.name;
          });
        }

      }),


  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signUp,
  loginAPI,
  surveyAPI,
  loginCheckFB,
  logoutFB,
  resetAbilityAction,
  resetSkillsAction,
  updateAbilityAction,
  updateSkillsAction,
  deleteAbilityAction,
  deleteSkillsAction,
};

export { actionCreators };
