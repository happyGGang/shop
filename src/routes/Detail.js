import { useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      <div>
        <Box>
          <YellowBtn>버튼임</YellowBtn>
        </Box>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="아무사진"
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
