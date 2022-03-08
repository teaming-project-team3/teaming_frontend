import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  size: 50,
  border: "1",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin : ${(props) => props.margin}px;
`;

const AspectOutter = styled.div`
    width: 100%;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin : ${(props) => props.margin}px;
    border : ${(props) => props.border}px solid black;
    background-position: center center
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;