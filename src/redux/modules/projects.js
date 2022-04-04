import { handleActions } from "redux-actions";
import { produce } from "immer";
import { apis, apisMS } from "../../apis/apis";

// actions
const SET_MAIN_PROJECTS = "SET_MAIN_PROJECTS";
const CREATE_PROJECT = "CREATE_PROJECT";
const SET_PROJECT_DETAIL = "SET_PROJECT_DETAIL";

// action creators
//const setProjects = createAction(SET_MAIN_PROJECTS, (projects) => ({ projects }));
//const createProject = createAction(CREATE_PROJECT, (project) => ({ project }));

// initialState
const initialState = {
    isLoading:true,
    projectsMain:[{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },],
    projectsRank:[{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },],
    projectsDeadline:[{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },],
    projectDetail:{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:{nickname:""},
      likeCheck:false,
      likeCount:-1,
    },
    preview:null,
    projectsDev:[{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },],
    projectsDesigner:[{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },{
      _id:-1,
      imgUrl:"",
      contents:"",
      stack:[["",true]],
      title:"",
      profileUrl:"",
      nickname:"",
      likeCheck:false,
      likeCount:-1,
    },],
    matesDev:[{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },],
    matesDesigner:[{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },{
      _id:-1,
      nickname:"",
      profileUrl:"",
      position:"",
      projects:[],
      portfolio:-1,
    },],
};

export function setProjectsMain(projects) {
  return { type: SET_MAIN_PROJECTS, projects};
}

export function createProjectAC(project) {
  return { type: CREATE_PROJECT, project };
}

export function setProjectDetail(data) {
  return { type: SET_PROJECT_DETAIL, data };
}

export const loadProjectsMainAPI = () => {
  return async function (dispatch) {


    apis
        .loadProjectsMain()
            .then((res)=>{
                dispatch(setProjectsMain(res));
            })
            .catch((err)=>{
                window.alert("잠시 후 다시 시도해주세요!");
            })
    
  };
};

export const updateProjectAPI = (data, boardId, callback) => {
  return async function (dispatch) {
    console.log("update",data)
    apis
        .updateProjectAPI(data, boardId)
            .then((res)=>{
                callback();
                //dispatch(setProjectsMain(res));
            })
            .catch((err)=>{
                window.alert("잠시 후 다시 시도해주세요!");
                callback();
            })
    
  };
};


export const createProjectAPI = (data, callback) => {
  return async function (dispatch) {

    apisMS
        .createProjectAPI(data)
            .then((res)=>{
                callback();
                //dispatch(setProjectsMain(res));
            })
            .catch((err)=>{
                window.alert("잠시 후 다시 시도해주세요!");
                callback();
            })
    
  };
};

export const getProjectDetailAPI = (boardId, callback) => {
  return async function ( dispatch ) {

    apis
      .getProjectDetailAPI(boardId)
        .then((res) => {
          dispatch(setProjectDetail(res.data))
          callback();
        })
        .catch((err) => {
          window.alert("잠시 후 다시 시도해주세요!");
        })


  };
};


// reducer
export default handleActions(
  {

    [SET_MAIN_PROJECTS]: (state, action) =>
      produce(state, (draft) => {

        if(action.projects.data.rankBoards!==null&&action.projects.data.rankBoards.length!==0){
        if(action.projects.data.rankBoards.length<4){
          draft.projectsRank = [...draft.projectsRank, action.projects.data.rankBoards];
        }else{
          draft.projectsRank = action.projects.data.rankBoards;
        }
        }
        if(action.projects.data.deadlineBoards!==null&&action.projects.data.deadlineBoards.length!==0){
          if(action.projects.data.deadlineBoards.length<4){
            draft.projectsDeadline = [...draft.projectsRank, action.projects.data.deadlineBoards];
          }else{
            draft.projectsDeadline = action.projects.data.deadlineBoards;
          }
        }
        if(action.projects.data.designBoards!==null&&action.projects.data.designBoards.length!==0){
          if(action.projects.data.designBoards.length<4){
            draft.projectsDesigner = [...draft.projectsRank, action.projects.data.designBoards];
          }else{
            draft.projectsDesigner = action.projects.data.designBoards;
          }
        }
        if(action.projects.data.devBoards!==null&&action.projects.data.devBoards.length!==0){
          if(action.projects.data.devBoards.length<4){
            draft.projectsDev = [...draft.projectsRank, action.projects.data.devBoards];
          }else{
            draft.projectsDev = action.projects.data.devBoards;
          }
        }
        //백엔드 처리할것
        //draft.projectsDev = action.payload.projects.backBoards;
        if(action.projects.data.designMates!==null&&action.projects.data.designMates.length!==0){
          if(action.projects.data.designMates.length<4){
            draft.matesDesigner = [...draft.projectsRank, action.projects.data.designMates];
          }else{
            draft.matesDesigner = action.projects.data.designMates;
          }
        }
        if(action.projects.data.devMates!==null&&action.projects.data.devMates.length!==0){
          if(action.projects.data.devMates.length<4){
            draft.matesDev = [...draft.projectsRank, action.projects.data.devMates];
          }else{
            draft.matesDev = action.projects.data.devMates;
          }
        }
        //draft.matesDev = action.payload.projects.backMates;
        
        draft.isLoading = false;

      }),

    [CREATE_PROJECT]: (state, action) =>
    produce(state, (draft) => {

      draft.projectsMain = [ ...state.projectsMain,  action.payload.project];

    }),

    [SET_PROJECT_DETAIL]: (state, action) =>
    produce(state, (draft) => {

      if(action.data!==null){
      draft.projectDetail = action.data;
      }

    }),

  },
  initialState
);

// action creator export
const actionCreators = {
    loadProjectsMainAPI,
    createProjectAPI,
    getProjectDetailAPI,
};

export { actionCreators };
