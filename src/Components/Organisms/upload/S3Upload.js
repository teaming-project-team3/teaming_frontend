import './S3Upload.css';
import { Row, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {actionCreators as imageActions} from "../../../redux/modules/image";


export default function S3Upload(){
    const dispatch = useDispatch();
    

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        if(file.type !== 'image/jpeg' || fileExt !=='jpg'){
          alert('jpg 파일만 Upload 가능합니다.');
          return;
        }
        dispatch(imageActions.setFile(file));
        setPreview(e.target.files[0])
        dispatch()
      }


      const setPreview = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        }

      }

      return (
        <div className="h-fit w-fit">
          <div className="App-body">
            <Row>
              <Col>
                <Input className="overflow-hidden" type="file" onChange={handleFileInput}/>
              </Col>
            </Row>
          </div>
        </div>
      );

}