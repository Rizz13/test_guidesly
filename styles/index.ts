import styled from "@emotion/styled";
import { Button } from "antd";

export const BookNowBtn = styled(Button)`
position: fixed;
right: 20px;
bottom: 20px;
`;

export const Loader = styled("div")`
position: fixed;
right: 20px;
bottom: 16px;
z-index: 1;
background-color: #f7f7f7;
height: 80vh;
width: 350px;
box-shadow: 0 0 24px #dddddd;
border-radius: 4px;
padding: 10px;
border: 4px solid #fff;
.load{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #303030;
  box-shadow: 22px 0 #303030, -22px 0 #303030;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: flash 0.5s ease-out infinite alternate;
}`;

export const WindowContainer = styled("div")`
position: fixed;
right: 20px;
bottom: 16px;
z-index: 1;
background-color: #f7f7f7;
height: 80vh;
width: 350px;
box-shadow: 0 0 24px #dddddd;
border-radius: 4px;
padding: 10px;
border: 4px solid #fff;
display: flex;
flex-direction: column;
.tripContainer{
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.closeIcon {
  position: absolute;
  right: 0;
  top: 0;
}`

export const TripContainer = styled("div")`
display: flex;
gap: 10px;
border: 1px solid #e7e7e7;
border-radius: 4px;
padding: 4px;
cursor: pointer;
margin-bottom: 10px;
&:hover{
  background-color: #dbdbdb;
}
.infoSec{
  display: flex;
  flex-direction: column;
  width: 60%;
}
.locationImg {
  border-radius: 4px;
}`;

export const TimeContainer = styled("div")`
display: flex;
flex-wrap: wrap;
gap: 6px;
.timeSection {
  width: calc(50% - 3px);
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  &.active{
    background-color: #303030 !important;
    > span{
      color: #fff;
    }
  }
  &:hover{
    background-color: #ccc;
  }
  > span{
    display: block;
  }
  .price{
    text-align: right;
    font-weight: bold;
  }
}
`