import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import AWS from 'aws-sdk';
import { createProjectAPI } from "./projects";

//import {storage} from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
const SET_FILE = "SET_FILE";
const SET_FILES = "SET_FILES";
//const SET_IMG_URLS = "SET_IMG_URLS";

//const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const setFile = createAction(SET_FILE, (file) => ({file}));
const setFiles = createAction(SET_FILES, (files) => ({files}));
//const setImgUrls = createAction(SET_IMG_URLS, (urls)=>({urls}));

const initialState = {
    image_url: '',
    uploading: false,
    preview: null,
    image_file: null,
    image_files: [],
    image_urls: [],
}

const uploadImagesS3 = (data, callback) => {
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

        arr = imageFiles.map( async (url) => {
          
          const temp = await uploadFile(url);
          
          const imgUrl = "http://teamingdeploy.s3-website.ap-northeast-2.amazonaws.com"+temp.request.httpRequest.path

           return imgUrl;
          
        })

        console.log("arr!!!!", arr);

        arr = await Promise.all(arr);

        data = {...data, imgUrl: arr}
    
        console.log("before Create API", data, arr);
        
        dispatch(createProjectAPI(data, callback));
        dispatch(setFile(""));
        dispatch(setFiles([]));

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
    draft.image_files = [...draft.image_files , ...action.payload.files];
    }),
}, initialState);

const actionCreators = {
  uploadImage,
  uploadImagesS3,
  setPreview,
  setFile,
  setFiles,
};

export {actionCreators};

