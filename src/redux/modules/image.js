import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import AWS from 'aws-sdk';
import { createProjectAPI, updateProjectAPI } from "./projects";
import { updatePortFolio } from "./users";

//import {storage} from "../../shared/firebase";

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
//const SET_IMG_URLS = "SET_IMG_URLS";

//const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const setFile = createAction(SET_FILE, (file) => ({file}));
const setFiles = createAction(SET_FILES, (files) => ({files}));
const setFilesArr = createAction(SET_FILES_ARR, (files, idx) => ({files, idx}));
const clearImg = createAction(CLEAR_IMG, (idx)=>({idx}));
//const initFiles = createAction(INIT_FILES, (id)=> ({id}));
const removeFilesArr = createAction(REMOVE_FILES_ARR, (id)=>({id}));
//const resetFilesArr = createAction(RESET_FILES_ARR, ()=>{});
//const setImgUrls = createAction(SET_IMG_URLS, (urls)=>({urls}));

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
        console.log("start uploadImageS3");

        const id = localStorage.getItem("userId");
        const imageFiles = getState().image.image_files;
        console.log("get State in uploadImages S3", imageFiles);
        
        const ACCESS_KEY = process.env.REACT_APP_BASE_ACCESS_KEY;
        const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
        const REGION = "ap-northeast-2";
        const S3_BUCKET = 'teamingdeploy';
      
        AWS.config.update({
          accessKeyId: ACCESS_KEY,
          secretAccessKey: SECRET_ACCESS_KEY
        });
        
        const myBucket = new AWS.S3({
          params: { Bucket: S3_BUCKET},
          region: REGION,
        });
      
        const uploadFile = async (file) => {
          
          const imgName = `${id}_${new Date().getTime()}`

          console.log("upload File, file", file);

          const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: "upload/projects/" + imgName + file.name
          };
          
          return myBucket.putObject(params)
            .on('httpUploadProgress', async (evt, res) => {
              const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+res.request.httpRequest.path
      
              console.log("uploaded S3 ImgUrl : ", imgUrl);

            })
            .send((err) => {
              if (err) console.log("s3 upload err", err);
            })
          
        
        }

        console.log("imageFiles,, before map", imageFiles);

        let arr = [];

        // arr = await imageFiles.map( async (url) => {
          
        //   const temp = await uploadFile(url);
          
        //   const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

        //    return imgUrl;
          
        // })
        
        for(let i=0;i<imageFiles.length;i++){

          const temp = await uploadFile(imageFiles[i]);

          const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

          arr = [...arr, imgUrl];
        }
      

        console.log("arr!!!!", arr);

        arr = await Promise.all(arr);

        data = {...data, imgUrl: arr}
    
        console.log("before Create API", data, arr);

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
      console.log("start uploadImageS3");

      const id = localStorage.getItem("userId");
      const imageFiles = getState().image.filesArr;
      console.log("get State in uploadImages S3", imageFiles);
      
      const ACCESS_KEY = process.env.REACT_APP_BASE_ACCESS_KEY;
      const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
      const REGION = "ap-northeast-2";
      const S3_BUCKET = 'teamingdeploy';
    
      AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
      });
      
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
      });
    
      const uploadFile = async (file) => {
        
        const imgName = `${id}_${new Date().getTime()}`

        console.log("upload File, file", file);

        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: "upload/projects/" + imgName + file.name
        };
        
        return myBucket.putObject(params)
          .on('httpUploadProgress', async (evt, res) => {
            const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+res.request.httpRequest.path
    
            console.log("uploaded S3 ImgUrl : ", imgUrl);

          })
          .send((err) => {
            if (err) console.log("s3 upload err", err);
          })
        
      
      }

      console.log("imageFiles,, before map", imageFiles);

      

      // let arr = portfolioList.map( async (portfolio)=>{

      //   let urlss =[];

      //   for(let i=0;i<imageFiles[portfolio.id].length;i++){


      //     console.log("item.file", imageFiles[portfolio.id][i].file);

      //     const temp = await uploadFile(imageFiles[portfolio.id][i].file);

      //     const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

      //     urlss.push(imgUrl);
      //   }

      //   return {...portfolio, image:urlss};
        
        // let urls = imageFiles[portfolio.id].map( async (item)=>{

        //   console.log("item.file", item.file);

        //   const temp = await uploadFile(item.file);

        //   const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

        //  return imgUrl;

        // })
  
        // return {...portfolio, image:urls}
      //});

      let arr=[];

      for(let j=0;j<portfolioList.length;j++){

        let urlss =[];

        for(let i=0;i<imageFiles[portfolioList[j].id].length;i++){


          console.log("item.file", imageFiles[portfolioList[j].id][i].file);

          const temp = await uploadFile(imageFiles[portfolioList[j].id][i].file);

          const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

          urlss.push(imgUrl);
        }

        arr.push({...portfolioList[j], imageUrl:urlss});

      }

      // let arr = portfolioList.map( async (portfolio)=>{

      //   let urlss =[];

      //   for(let i=0;i<imageFiles[portfolio.id].length;i++){


      //     console.log("item.file", imageFiles[portfolio.id][i].file);

      //     const temp = await uploadFile(imageFiles[portfolio.id][i].file);

      //     const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

      //     urlss.push(imgUrl);
      //   }

      //   return {...portfolio, image:urlss};
      // });


      console.log("arr!!!!", arr);

      arr = await Promise.all(arr);

      data = {...data, "portfolioUrl":arr};
      
      console.log("before Create API", data);
      
      dispatch(updatePortFolio(data, callback));
      //dispatch(resetFilesArr());

  }
}

export const uploadImagesS3Update = (data, callback) => {
  return async function(dispatch, getState, {history}){
      console.log("start uploadImageS3");

      const id = localStorage.getItem("userId");
      const imageFile = getState().image.image_file;
      console.log("get State in uploadImages S3", imageFile);
      
      const ACCESS_KEY = process.env.REACT_APP_BASE_ACCESS_KEY;
      const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
      const REGION = "ap-northeast-2";
      const S3_BUCKET = 'teamingdeploy';
    
      AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
      });
      
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
      });
    
      const uploadFile = async (file) => {
        
        const imgName = `${id}_${new Date().getTime()}`

        console.log("upload File, file", file);

        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: "upload/projects/" + imgName + file.name
        };
        
        return myBucket.putObject(params)
          .on('httpUploadProgress', async (evt, res) => {
            const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+res.request.httpRequest.path
    
            console.log("uploaded S3 ImgUrl : ", imgUrl);

            data = {...data, "profileUrl" : imgUrl}
  
            console.log("before Create API", data, imgUrl);
            
            callback(data);

            dispatch(setFile(""));
            dispatch(setFiles([]));

          })
          .send((err) => {
            if (err) console.log("s3 upload err", err);
          })
        
      
      }

      console.log("imageFiles,, before map", imageFile);


      let temp = await uploadFile(imageFile);
      console.log(temp);
      // temp = await Promise(temp);

      // const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

      // console.log("arr!!!!", imgUrl);

      // data = {...data, "profileUrl" : imgUrl}
  
      // console.log("before Create API", data, imgUrl);
      
      
      // callback(data);
      //dispatch(updateUserInfoAPI(data, callback));


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
      console.log("SET_FILES : ", action.payload.files);
      draft.image_files = action.payload.files;
      console.log("SET_FILES : ", draft.image_files);
    }),
    [INIT_FILES]: (state, action) => produce(state, (draft) => {
      console.log("INIT_FILES : ", action.payload.id);
      draft.image_files = [...draft.image_files, {id:action.payload.id}];
      
      }),
    [SET_FILES_ARR]: (state, action) => produce(state, (draft) => {
      console.log("SET_FILES_ARR : ", action.payload.files);
      const idx = action.payload.idx;
      const data = action.payload.files;
      
      draft.filesArr[idx] = data;

    }),
    [RESET_FILES_ARR]: (state, action) => produce(state, (draft) => {


      draft.filesArr = {0:[]};

      //draft.filesArr = temp;

    }),
    [REMOVE_FILES_ARR]: (state, action) => produce(state, (draft) => {
      console.log("REMOVE_FILES_ARR : ", action.payload.files);

      delete draft.filesArr[action.payload.id];

    }),
    [CLEAR_IMG]: (state, action) => produce(state, (draft) => {
      console.log("CLEAR_IMG : ", action.payload.idx);

      const idx = action.payload.idx;
      
      if(idx===-1){
        draft.image_files = [];
      }else{
        //draft.image_file = null;
        //delete draft.filesArr[idx];
        //draft.preview = null;
      }


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

