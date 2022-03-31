import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../apis/apis";
import { deleteCookie, setCookie } from "../../shared/Cookie";

// actions
//const LOG_IN = "LOG_IN";
//const KAKAO_LOG_IN = "KAKAO_LOG_IN"
const LOG_OUT = "LOG_OUT";
//const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";
const SET_PROFILE_IMG = "SET_PROFILE_IMG";
const RESET_ABILITY = "reset/Ability";
const UPDATE_ABILITY = "update/Ability";
const RESET_SKILLS = "reset/Skills";
const UPDATE_SKILLS = "update/Skills";
const DELETE_ABILITY = "delete/Ability";
const DELETE_SKILLS = "delete/Skills";
const SET_NOW_PROJECT_USERS = "set/project/Users";
const SET_IS_LOG_IN = "SET_IS_LOG_IN";
const SET_MY_STATS = "SET_MY_STATS";
const ADD_NOW_PROJECT_USER = "ADD_NOW_PROJECT_USER";
const SET_MY_PROJECTS = "SET_MY_PROJECTS";

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
const deleteSkillsAction = createAction(DELETE_SKILLS, (data)=>({ data }));
const setMyProjectAction = createAction(SET_MY_PROJECTS, (projects, num) => ({ projects, num }))
//const setUserLogin = createAction(SET_IS_LOG_IN, (url) => ({ url }));


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
  nowProjectUser: [],
  myStats: [],
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

export function setNowUsers(users) {
  console.log("redux, setNowUsers")
  return { type: SET_NOW_PROJECT_USERS, users };
}

export function setIsLogIn(imgUrl) {
  console.log("redux, setIsLogin")
  return { type: SET_IS_LOG_IN, imgUrl};
}

export function setLogOut(){
  return { type:LOG_OUT }
}

export function setMyUserStats(data){
  return { type: SET_MY_STATS, data }
}

export function addNowProjectUserAC(user){
  return { type: ADD_NOW_PROJECT_USER, user }
}

export function setMyProject(projects, num){
  return { type: SET_MY_PROJECTS, projects, num}
}


//middleWare
export const resetAbilityAPI = (arrAbility) => {
  return async function (dispatch) {
    //dispatch(isLoaded(false));
    //const docRef = await addDoc(collection(db, "word"), word);
    //const word_data = { id: docRef.id, ...word };

    console.log("addAbility : ", arrAbility);
    dispatch(resetAbility(arrAbility));
  };
};

export const setNowProjectUsers = (users) => {
  return async function (dispatch){

    dispatch(setNowUsers(users))

  };
};

export const addNowProjectUsers = (user) => {
  return async function (dispatch){

    dispatch(addNowProjectUserAC(user))

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
  return function (dispatch) {
    //로그인 API 구현부

    const data = {
      email: id,
      password: pwd,
    };

    apis
      .login(data)
      .then((res) => {
        if(res.data.success){
        localStorage.setItem("userId", res.data.nickname);
        setCookie("token", res.data.Authorization, 1);
        sessionStorage.setItem("token", res.data.Authorization);
        console.log("login completed", res);
        
        dispatch(setIsLogIn(res.data.profileUrl));
        //surveyChecker 받아서 넘기기
        callback(res.data.suveyCheck);
        }
      })
      .catch((err) => {
        console.log("login err : ", err);
        window.alert("로그인 실패!", err);
      });

      return;
  };
};

export const updatePortFolio = (portfolioList, callback) => {
  return function () {

    apis
      .updateUserInfo(portfolioList)
      .then((res)=>{
        console.log("updatePortFolio res", res);
        callback();
      })
      .catch((err)=>{
        console.log("updatePortFolio err",err);
        callback();
      })

  };
};


const signUp = (data, callback) => {
  return function () {
    console.log("signUp data", data);
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

const surveyAPI = (data, callback) => {
  return function () {
    console.log("surbeyAPI",data);
    apis
      .survey(data)
      .then((res)=>{

        console.log("survey API success", res)
        callback();
      })
      .catch((err)=>{
        console.log("survey API err",err)
      })




  };
};

const getMyStats = () => {
  return function(dispatch){

    apis
      .getMyStatsAPI()
        .then((res)=>{

          console.log("My Stats res : ", res)
          dispatch(setMyUserStats(res.data.userInfo))
          dispatch(setMyProject(res.data.projectData, res.data.totalProject))

        })
        .catch((err)=>{

          console.log("myStats Err : ", err)

        })

  }
}

export const updateUserInfoAPI = (data) => {
  return function(dispatch){
    console.log("data!",data);
    apis
      .updateUserInfo(data)
      .then((res)=>{
        console.log("updateUserInfo res",res);
      })
      .catch((err)=>{
        console.log("updateUserInfo err", err);
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
    [SET_IS_LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        console.log("SET_IS_LOG_IN reducer", action.imgUrl);
        draft.is_login = true;
        draft.profileImage = action.imgUrl;
        console.log("complete setIslogin")
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
        deleteCookie("token");
        localStorage.removeItem("userId");
        sessionStorage.removeItem("token");
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),

    [RESET_ABILITY]: (state, action) =>
      produce(state, (draft) => {
        
        if(parseInt(action.position)===1){
          const result = [...state.abilityFront, { name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.abilityFront = result;
        }else if(parseInt(action.position)===2){
          const result = [...state.abilityBack, { name:action.item.value.toLowerCase(), time:0, rate:0}]

          draft.abilityBack = result;
        }else if(parseInt(action.position)===3){
          const result = [...state.abilityDesigner, { name:action.item.value.toLowerCase(), time:0, rate:0}]

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

      [SET_NOW_PROJECT_USERS]: (state, action) =>
      produce(state, (draft) => {
        console.log("SET_NOW_PROJECT_USERS", action.users);
        draft.nowProjectUser = action.users;
      }),
      
      [ADD_NOW_PROJECT_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log("ADD_NOW_PROJECT_USER", action.user);
        draft.nowProjectUser = [...draft.nowProjectUser, action.user];
      }),

      [SET_MY_STATS]: (state, action) => 
      produce(state, (draft) => {

        draft.myStats = action.data;

      }),

      [SET_MY_PROJECTS]: (state, action) => 
      produce(state, (draft) => {

        draft.myProjects = action.projects;

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
  resetAbilityAction,
  resetSkillsAction,
  updateAbilityAction,
  updateSkillsAction,
  deleteAbilityAction,
  deleteSkillsAction,
  getMyStats,
};

export { actionCreators };
