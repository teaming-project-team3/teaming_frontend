import {createAction, handleActions} from "redux-actions";
import produce from "immer";

//import {storage} from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
const SET_FILE = "SET_FILE";

//const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const setFile = createAction(SET_FILE, (file) => ({file}));

const initialState = {
    image_url: '',
    uploading: false,
    preview: null,
    image_file: null,
}

const uploadImageFB = (image) => {
    return function(dispatch, getState, {history}){
        
        // dispatch(uploading(true));

        //  const _upload = storage.ref(`images/${image.name}`).put(image);

        //  _upload.then((snapshot) => {
        //    console.log(snapshot);
            
        //    snapshot.ref.getDownloadURL().then((url) => {
        //        dispatch(uploadImage(url));
        //      console.log(url);
        //    });
        //  });

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
      })
}, initialState);

const actionCreators = {
  uploadImage,
  uploadImageFB,
  setPreview,
  setFile,
};

export {actionCreators};

