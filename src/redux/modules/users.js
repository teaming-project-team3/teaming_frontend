import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../apis/apis";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import ReactGA from "react-ga";

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
const SET_SELECTED_USER_INFO = "SET_SELECTED_USER_INFO";
const SET_SURVEY_CHECKER = "SET_SURVEY_CHECKER";
const LOG_IN_MAINTAIN = "LOG_IN_MAINTAIN";

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
const setSelectedUSerInfoCA = createAction(SET_SELECTED_USER_INFO,(data)=>({data}));
//const setUserLogin = createAction(SET_IS_LOG_IN, (url) => ({ url }));


// initialState
const initialState = {
  user: null,
  is_login: false,
  surveyCheck: false,
  profileImage: null,
  abilityFront: [],
  skillsFront: [],
  abilityBack: [],
  skillsBack: [],
  abilityDesigner: [],
  skillsDesigner: [],
  myProjects: [],
  nowProjectUser: [{
    _id: -1,
    stack: {
      front: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      back: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      design: {
        skills: {
          name: "",
          score: -1
        }
      },
      reliability: 50,
      cooperation: 50
    },
    url: "",
    portfolioUrl: [],
    design: {
      skills: []
    },
    back: {
      ability: [],
      skills: []
    },
    front: {
      ability: [],
      kills: []
    },
    introduction: "",
    position: "",
    userId: {
      _id: -1,
      suveyCheck: false,
      kakaoId: "",
      dmRooms: [],
      profileUrl: "이미지 주소",
      nickname: "test1",
      email: "test1@test.com",
      createdAt: "2022-04-01T13:25:20.845Z",
      updatedAt: "2022-04-01T13:25:20.845Z",
      __v: 0
    },
    createdAt: "2022-04-01T13:25:20.883Z",
    updatedAt: "2022-04-01T13:25:20.883Z",
    __v: 0
  },],
  myStats: {
    _id: -1,
    stack: {
      front: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      back: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      design: {
        skills: {
          name: "",
          score: -1
        }
      },
      reliability: 50,
      cooperation: 50
    },
    url: "",
    portfolioUrl: [],
    design: {
      skills: []
    },
    back: {
      ability: [],
      skills: []
    },
    front: {
      ability: [],
      kills: []
    },
    introduction: "",
    position: "",
    userId: {
      _id: -1,
      suveyCheck: false,
      kakaoId: "",
      dmRooms: [],
      profileUrl: "이미지 주소",
      nickname: "test1",
      email: "test1@test.com",
      createdAt: "2022-04-01T13:25:20.845Z",
      updatedAt: "2022-04-01T13:25:20.845Z",
      __v: 0
    },
    createdAt: "2022-04-01T13:25:20.883Z",
    updatedAt: "2022-04-01T13:25:20.883Z",
    __v: 0
  },

  selectedUser: {
    userInfo: {
    _id: -1,
    stack: {
      front: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      back: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      design: {
        ability: {
          name: "",
          score: -1
        },
        skills: {
          name: "",
          score: -1
        }
      },
      reliability: 50,
      cooperation: 50
    },
    url: "",
    portfolioUrl: [],
    design: {
      skills: []
    },
    back: {
      ability: [],
      skills: []
    },
    front: {
      ability: [],
      kills: []
    },
    introduction: "",
    position: "",
    userId: {
      _id: -1,
      suveyCheck: false,
      kakaoId: "",
      dmRooms: [],
      profileUrl: "이미지 주소",
      nickname: "test1",
      email: "test1@test.com",
      createdAt: "2022-04-01T13:25:20.845Z",
      updatedAt: "2022-04-01T13:25:20.845Z",
      __v: 0
    },
    createdAt: "2022-04-01T13:25:20.883Z",
    updatedAt: "2022-04-01T13:25:20.883Z",
    __v: 0
  },
  },
};

export function resetAbility(item, position) {
  return { type: RESET_ABILITY, item: item, position: position };
}

export function resetSkills(skill, position) {  
  return { type: RESET_SKILLS, item: skill, position: position };
}

export function updateSkills(data, idx, position) {
  return { type: UPDATE_SKILLS, data: data, idx: idx, position: position };
}

export function updateAbility(data, idx, position) {
  return { type: UPDATE_ABILITY, data: data, idx: idx, position: position };
}

export function deleteAbility(data, position) {
  return { type: DELETE_ABILITY, data: data, position: position };
}

export function deleteSkills(data, position) {
  return { type: DELETE_SKILLS, data: data, position: position };
}

export function setNowUsers(users) {
  return { type: SET_NOW_PROJECT_USERS, users };
}

export function setIsLogIn(imgUrl, surveyCheck) {
  return { type: SET_IS_LOG_IN, imgUrl, surveyCheck};
}

export function loginMaintainer(checker) {
  return { type: LOG_IN_MAINTAIN, checker};
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

export function setSelectedUSerInfo(data){
  return { type: SET_SELECTED_USER_INFO, data }
}

export function setSurveyChecker(checker){
  return { type : SET_SURVEY_CHECKER, checker }
}

//middleWare
export const resetAbilityAPI = (arrAbility) => {
  return async function (dispatch) {

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

export const getSelectedUserInfo = (id, callback) => {
  return async function (dispatch) {
    console.log("selectedUserInfo", id);
    apis
    .getUserPage(id)
      .then((res)=>{
        dispatch(setSelectedUSerInfo(res.data));
        callback();
      })
      .catch((err)=>{
        callback();
      })

  };
}

export const updateAbilityAPI = (data, idx) => {
  return async function (dispatch) {

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
        
        dispatch(setIsLogIn(res.data.profileUrl, !res.data.suveyCheck));
        ReactGA.event({
          category: "User",
          action: "User Login",
          label: "Login",
        });
        //surveyChecker 받아서 넘기기
        callback(res.data.suveyCheck);
        }
      })
      .catch((err) => {
        window.alert("로그인 실패!", err);
      });

      return;
  };
};

export const updatePortFolio = (portfolioList, callback, resetCallBack) => {
  return function () {

    apis
      .updateUserInfo(portfolioList)
      .then((res)=>{
        resetCallBack();
        callback();
      })
      .catch((err)=>{
        window.alert('잠시 후 다시 시도해주세요!')
        callback();
      })

  };
};


const signUp = (data, callback) => {
  return function () {
    //회원가입 API 구현부
    apis
      .signup(data)
      .then((res) => {
        ReactGA.event({
          category: "User",
          action: "User Signup",
          label: "Signup",
        });
        callback();
      })
      .catch((err) => {
        if(err.response.data.message==="Exisiting email"){
          window.alert(`이미 있는 이메일입니다!`)
        }else if(err.response.data.message==="Exisiting nickname"){
          window.alert(`이미 있는 닉네임입니다!`)
        }else{
        window.alert(`다시 시도해주세요!, 이유 : ${err.response.data.error}, ${err.response.data.message}`)
        }
      });
  };
};

const surveyAPI = (data, callback) => {
  return function (dispatch) {

    apis
      .survey(data)
      .then((res)=>{

        dispatch(setSurveyChecker(!res.data.success));
        ReactGA.event({
          category: "User",
          action: "User Survey",
          label: "Survey",
        });
        callback();
      })
      .catch((err)=>{
        window.alert("err",err.data.msg);
      })




  };
};

const getMyStats = () => {
  return function(dispatch){

    apis
      .getMyStatsAPI()
        .then((res)=>{
          
          dispatch(setMyUserStats(res.data.userInfo))
          dispatch(setMyProject(res.data.projectData, res.data.totalProject))

          ReactGA.event({
            category: "User",
            action: "My User Info",
            label: "My Stats",
          });

        })
        .catch((err)=>{

        })

  }

}

export const updateUserInfoAPI = (data, goMain) => {
  return async function(dispatch){

    apis
      .updateUserInfo(data)
      .then((res)=>{
        goMain();
      })
      .catch((err)=>{
        window.alert('잠시 후 다시 시도해주세요!')
        goMain();
      })

  }
}

// reducer
export default handleActions(
  {
    [SET_PROFILE_IMG]: (state, action) =>
      produce(state, (draft) => {
        draft.profileImage = action.payload.imgUrl;
      }),
    [SET_IS_LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
        draft.profileImage = action.imgUrl;
        draft.surveyCheck = action.surveyCheck;
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
        draft.nowProjectUser = action.users;
      }),
      
      [ADD_NOW_PROJECT_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.nowProjectUser = [...draft.nowProjectUser, action.user];
      }),

      [SET_MY_STATS]: (state, action) => 
      produce(state, (draft) => {
        
        if(action.data!==null){
          draft.myStats = action.data;

        }

      }),

      [SET_MY_PROJECTS]: (state, action) => 
      produce(state, (draft) => {

        if(action.projects!==null&&action.projects.length!==0){
        draft.myProjects = action.projects;
        }

      }),

      [SET_SELECTED_USER_INFO]: (state, action) => 
      produce(state, (draft) => {

        if(action.data!==null){
        draft.selectedUser = action.data;
        }
        
      }),

      [SET_SURVEY_CHECKER]: (state, action) =>
      produce(state, (draft) => {

        draft.surveyCheck = action.checker;

      }),

      [LOG_IN_MAINTAIN]: (state, action) =>
      produce(state, (draft) =>{

        draft.is_login = action.checker;

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
  setMyProjectAction,
  setSelectedUSerInfoCA,
};

export { actionCreators };
