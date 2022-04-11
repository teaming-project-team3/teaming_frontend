import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import AWS from 'aws-sdk';
import { createProjectAPI, updateProjectAPI } from "./projects";
import { updatePortFolio } from "./users";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
const SET_FILE = "SET_FILE";
const SET_FILES = "SET_FILES";
const SET_FILES_ARR = "SET_FILES_ARR";
const RESET_FILES_ARR = "RESET_FILES_ARR";
const CLEAR_IMG = "CLEAR_IMG";
const INIT_FILES = "INIT_FILES";
const REMOVE_FILES_ARR = "REMOVE_FILES_ARR";

const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const setFile = createAction(SET_FILE, (file) => ({file}));
const setFiles = createAction(SET_FILES, (files) => ({files}));
const setFilesArr = createAction(SET_FILES_ARR, (files, idx) => ({files, idx}));
const clearImg = createAction(CLEAR_IMG, (idx)=>({idx}));
const removeFilesArr = createAction(REMOVE_FILES_ARR, (id)=>({id}));
const resetFilesArr = createAction(RESET_FILES_ARR,()=>({}));

const initialState = {
    image_url: '',
    uploading: false,
    preview: null,
    image_file: null,
    image_files: [],
    image_urls: [],
    filesArr: {0:[],1:[],2:[],3:[]},
}

const uploadImagesS3 = (data, callback, checker=false, boardId) => {
    return async function(dispatch, getState, {history}){

        const id = localStorage.getItem("userId");
        const imageFiles = getState().image.image_files;
        
        const REGION = "ap-northeast-2";
        const S3_BUCKET = 'teaming.link';
    
        AWS.config.update({
          accessKeyId: "AKIAZJ3LGUQ4TBL3O7RL",
          secretAccessKey: "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"
        });
        
        const myBucket = new AWS.S3({
          params: { Bucket: S3_BUCKET},
          region: REGION,
        });
        
      
        const uploadFile = async (file) => {
          
          const imgName = `${id}_${new Date().getTime()}`

          const params = {
            ACL: 'private',
            Body: file,
            Bucket: S3_BUCKET,
            Key: "upload/projects/" + imgName + file.name
          };
          
          return myBucket.putObject(params)
            .on('httpUploadProgress', async (evt, res) => {
      
            })
            .send((err) => {
              if (err) window.alert('이미지가 업로드 되지 않았습니다 에러코드 : ',err)
            })
          
        
        }

        let arr = [];

        if(imageFiles.length>0){
        
        for(let i=0;i<imageFiles.length;i++){

          const temp = await uploadFile(imageFiles[i]);

          const imgUrl = "https://s3.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

          arr = [...arr, imgUrl];
        }

        arr = await Promise.all(arr);

        }

        const temp = [...data.imgUrl, ...arr];

        data = {...data, imgUrl: temp}
    
        if(checker){
          dispatch(updateProjectAPI(data, boardId, callback));
        }else{
          dispatch(createProjectAPI(data, callback));
        }
        
        dispatch(setFile(""));
        dispatch(setFiles([]));

    }
}

export const uploadImagesS3PortFolio = (portfolioList, data, callback) => {
  return async function(dispatch, getState, {history}){

      const id = localStorage.getItem("userId");
      const imageFiles = getState().image.filesArr;
      
      const REGION = "ap-northeast-2";
      const S3_BUCKET = 'teaming.link';
    
      AWS.config.update({
        accessKeyId: "AKIAZJ3LGUQ4TBL3O7RL",
        secretAccessKey: "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"
      });
      
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
      });
      

      const uploadFile = async (file) => {
        
        const imgName = `${id}_${new Date().getTime()}`

        const params = {
          ACL: 'private',
          Body: file,
          Bucket: S3_BUCKET,
          Key: "upload/projects/" + imgName + file.name
        };
        
        return myBucket.putObject(params)
          .on('httpUploadProgress', async (evt, res) => {
    
          })
          .send((err) => {
            if (err) window.alert('이미지가 업로드 되지 않았습니다 에러코드 : ',err)
          })
      }

      let arr=[];

      for(let j=0;j<portfolioList.length;j++){

        let urlss = [];
        
        if(portfolioList[j].imageUrl.length>0){
          urlss = portfolioList[j].imageUrl;
        };

        if(imageFiles[portfolioList[j].id]!==null&&imageFiles[portfolioList[j].id]!==undefined){

        for(let i=0;i<imageFiles[portfolioList[j].id].length;i++){

          const temp = await uploadFile(imageFiles[portfolioList[j].id][i].file);

          const imgUrl = "https://s3.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

          urlss = [...urlss, imgUrl];
        }
      }
        arr.push({...portfolioList[j], imageUrl:urlss});

      }

      arr = await Promise.all(arr);

      data = {...data, "portfolioUrl":arr};
            
      dispatch(updatePortFolio(data, callback, ()=>{dispatch(resetFilesArr());}));
      //dispatch(resetFilesArr());

  }
}

export const uploadImagesS3Update = (data, callback) => {
  return async function(dispatch, getState, {history}){

      const id = localStorage.getItem("userId");
      const imageFile = data.profileUrl;
      
      const REGION = "ap-northeast-2";
      const S3_BUCKET = 'teaming.link';
    
      AWS.config.update({
        accessKeyId: "AKIAZJ3LGUQ4TBL3O7RL",
        secretAccessKey: "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"
      });
      
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
      });
      
      const uploadFile = async (file) => {
        
        const imgName = `${id}_${new Date().getTime()}`

        const params = {
          ACL: 'private',
          Body: file,
          Bucket: S3_BUCKET,
          Key: "upload/projects/" + imgName + file.name
        };
        
        return myBucket.putObject(params)
          .on('httpUploadProgress', async (evt, res) => {
            const imgUrl = "https://s3.ap-northeast-2.amazonaws.com"+res.request.httpRequest.path
    
            data = {...data, "profileUrl" : imgUrl}
              
            callback(data);

            dispatch(setFile(""));
            dispatch(setFiles([]));

          })
          .send((err) => {
            if (err) window.alert('이미지가 업로드 되지 않았습니다 에러코드 : ',err)
          })
        
      
      }

      let temp = await uploadFile(imageFile);
      console.log(temp);

  }
}

export default handleActions({
    [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
      draft.preview = action.payload.preview;
    }),
    [SET_FILE]: (state, action) => produce(state, (draft) => {
        draft.image_file = action.payload.file;
      }),
    [SET_FILES]: (state, action) => produce(state, (draft) => {
      draft.image_files = action.payload.files;
    }),
    [INIT_FILES]: (state, action) => produce(state, (draft) => {
      draft.image_files = [...draft.image_files, {id:action.payload.id}];
      }),
    [SET_FILES_ARR]: (state, action) => produce(state, (draft) => {
      const idx = action.payload.idx;
      const data = action.payload.files;
      
      draft.filesArr[idx] = data;

    }),
    [RESET_FILES_ARR]: (state, action) => produce(state, (draft) => {


      draft.filesArr = {0:[],1:[],2:[]};

    }),
    [REMOVE_FILES_ARR]: (state, action) => produce(state, (draft) => {
      delete draft.filesArr[action.payload.id];

    }),
    [CLEAR_IMG]: (state, action) => produce(state, (draft) => {
      
        draft.image_files = [];
        draft.image_file = "";
        draft.filesArr = {0:[],1:[],2:[]};
        draft.preview = "";

    }),
}, initialState);

const actionCreators = {
  uploadImage,
  uploadImagesS3,
  setPreview,
  setFile,
  setFiles,
  setFilesArr,
  clearImg,
  removeFilesArr,
};

export {actionCreators};

