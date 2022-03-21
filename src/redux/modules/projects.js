import { handleActions } from "redux-actions";
import { produce } from "immer";
import { apisMS } from "../../apis/apis";

// actions
const SET_MAIN_PROJECTS = "SET_MAIN_PROJECTS";
const CREATE_PROJECT = "CREATE_PROJECT";
const SET_PROJECT_DETAIL = "SET_PROJECT_DETAIL";

// action creators
//const setProjects = createAction(SET_MAIN_PROJECTS, (projects) => ({ projects }));
//const createProject = createAction(CREATE_PROJECT, (project) => ({ project }));

// initialState
const initialState = {
    projectsMain:[],
    projectDetail:[],
};

export function setProjectsMain(projects) {
  console.log("Create Action, setProjectsMain : ", projects);
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


    apisMS
        .loadProjectsMain()
            .then((res)=>{
                console.log("PROJECT_MAIN_API RES : ", res)

                dispatch(setProjectsMain(res));
            })
            .catch((err)=>{
                console.log("PROJECT_MAIN_API ERR : ", err)
            })
    
  };
};


export const createProjectAPI = (data) => {
  return async function (dispatch) {


    apisMS
        .createProjectAPI(data)
            .then((res)=>{
                console.log("PROJECT_CREATE_API RES : ", res)

                dispatch(setProjectsMain(res));
            })
            .catch((err)=>{
                console.log("PROJECT_CREATE_API ERR : ", err)
            })
    
  };
};

export const getProjectDetailAPI = (boardId) => {
  return async function ( dispatch ) {

    apisMS
      .getProjectDetailAPI(boardId)
        .then((res) => {
          console.log("GET_PROJECT_DETAIL : ", res)
          dispatch(setProjectDetail(res.data))
        })
        .catch((err) => {
          console.log("GET_PROJECT_DETAIL : ", err)
          dispatch(setProjectDetail(err))
        })


  };
};


// reducer
export default handleActions(
  {

    [SET_MAIN_PROJECTS]: (state, action) =>
      produce(state, (draft) => {

        draft.projectsMain = action.payload.projects;
        console.log("projects save");

      }),

    [CREATE_PROJECT]: (state, action) =>
    produce(state, (draft) => {

      draft.projectsMain = [ ...state.projectsMain,  action.payload.project];
      console.log("project created, save");

    }),

    [SET_PROJECT_DETAIL]: (state, action) =>
    produce(state, (draft) => {

      draft.projectDetail = action.data;
      console.log("SET_PROJECT_DETAIL REDUCER : ")

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
