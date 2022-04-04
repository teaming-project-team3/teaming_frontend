/* eslint-disable no-unused-vars */
import { handleActions } from "redux-actions";
import { produce } from "immer";
import { apis, apisMS } from "../../apis/apis";

// actions
const SET_CATEGORY_PROJECTS = "SET_CATEGORY_PROJECTS";
const SET_LOADING = "SET_LOADING";
const CLEAR_CATEGORY_PROJECT = "CLEAR_CATEGORY_PROJECT";

// action creators
//const setProjects = createAction(SET_MAIN_PROJECTS, (projects) => ({ projects }));
//const createProject = createAction(CREATE_PROJECT, (project) => ({ project }));

// initialState
const initialState = {
    isLoading:true,
    projectsAll:[],
    projectsDev:[],
    projectsDesigner:[],
};

export function clearCategoryProject(){
  return { type: CLEAR_CATEGORY_PROJECT };
}

export function setLoading(checker) {
  return { type: SET_LOADING, checker};
}

export function setProjectsMain(projects, category) {
  return { type: SET_CATEGORY_PROJECTS, projects, category};
}

export const loadProjectsCatMainAPI = (category, page) => {
  return async function (dispatch) {
    
    dispatch(setLoading(true));

    apis
        .loadProjectsCatMain(category, page)
            .then((res)=>{
                console.log("res", category, page)
                dispatch(setProjectsMain(res, category));
            })
            .catch((err)=>{
            })
    
  };
};

// reducer
export default handleActions(
  {

    [SET_CATEGORY_PROJECTS]: (state, action) =>
      produce(state, (draft) => {

        if(action.category==="rank"){
          draft.projectsAll = [...draft.projectsAll, ...action.projects.data];
        }else if(action.category==="design"){
          draft.projectsDesigner = [...draft.projectsDesigner, ...action.projects.data];
        }else if(action.category==="dev"){
          draft.projectsDev = [...draft.projectsDev, ...action.projects.data];
        }

        
        draft.isLoading = false;

      }),

      [SET_LOADING]: (state, action) =>
      produce(state, (draft) => {

        draft.isLoading = action.checker;

      }),

      [CLEAR_CATEGORY_PROJECT]: (state, action) =>
      produce(state, (draft) => {

        draft.projectsAll = [];
        draft.projectsDesigner = [];
        draft.projectsDev = [];

      }),

  },
  initialState
);

// action creator export
const actionCreators = {
    loadProjectsCatMainAPI,
};

export { actionCreators };
