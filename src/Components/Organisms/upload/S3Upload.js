import './S3Upload.css';
import {useState} from "react";
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {actionCreators as imageActions} from "../../../redux/modules/image";


export default function S3Upload(){
    const dispatch = useDispatch();
    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const ACCESS_KEY = process.env.REACT_APP_BASE_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'reactproject2';

    const userId = "temp"
    
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY
    });
    
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    });

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        if(file.type !== 'image/jpeg' || fileExt !=='jpg'){
          alert('jpg 파일만 Upload 가능합니다.');
          return;
        }
        setProgress(0);
        setSelectedFile(e.target.files[0]);
        setPreview(e.target.files[0])
      }

      const uploadFile = (file) => {
        const imgName = `${userId}_${new Date().getTime()}`
        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: "upload/" + file.name + imgName
        };
        
        myBucket.putObject(params)
          .on('httpUploadProgress', (evt, res) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100))
            setShowAlert(true);
            let imgUrl = "http://reactproject2.s3-website.ap-northeast-2.amazonaws.com/"+res.request.httpRequest.path

            console.log("uploaded S3 ImgUrl : ", imgUrl);

            dispatch(imageActions.uploadImage(imgUrl))

            setTimeout(() => {
              setShowAlert(false);
              setSelectedFile(null);
            }, 3000)
          })
          .send((err) => {
            if (err) console.log(err)
          })

        
      }


      const setPreview = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        }

      }



      return (
        <div className="App">
          <div className="App-header">
            <Row>
              <Col><h1>File Upload</h1></Col>
            </Row>
          </div>
          <div className="App-body">
            <Row>
              <Col>
                { showAlert?
                  <Alert color="primary">업로드 진행률 : {progress}%</Alert>
                  : 
                  <Alert color="primary">파일을 선택해 주세요.</Alert> 
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <Input color="primary" type="file" onChange={handleFileInput}/>
                {selectedFile?(
                  <Button color="primary" onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
                ) : null }
              </Col>
            </Row>
          </div>
        </div>
      );

}