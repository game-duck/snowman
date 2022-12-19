import { useNavigate } from 'react-router';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import Slider from "react-slick";

export default function SnowmanDesign() {
  const navigate = useNavigate();
  const linkSnowmanGarden = () => {
    navigate('/');
  };
  
  const linkLetter = () => {
    navigate('/letter');
  };

  // 슬라이드
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    vertical: false,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <AllContainer>
      <Main>
        <MainText>
          1. 눈사람을 꾸밀 <span style={{ color: '#f5c51f' }}>재료</span>를
          선택해주세요
          <br></br>
          2. 눈사람을 완성했다면{' '}
          <span style={{ color: '#f5c51f' }}>편지쓰러가기</span> 버튼을 눌러
          친구에게 편지를 써주세요
        </MainText>

        <SnowmanBox>
          <Snowman>
            <img
              src={process.env.PUBLIC_URL + '/images/snowmanList/Base.png'}
              alt="snowman"
              style={{
                width: '100%',
                objectFit: 'cover',
                transform: 'scale(1.8)'
              }}
            />
          </Snowman>
        </SnowmanBox>

          <DesignBox>
            <DesignBtnBox>
              <DesignBtn>눈사람 머리</DesignBtn>
              <DesignBtn>눈사람 몸</DesignBtn>
            </DesignBtnBox>
            <StyledSlider {...settings}>
              <AttrBox>
                <Attr>
                  <img src={process.env.PUBLIC_URL + '/images/snowmanPiece/HeadBasic.png'} alt='HeadBasic'/>
                </Attr>
              </AttrBox>
              <AttrBox>
                <Attr>2</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>3</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>4</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>5</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>6</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>7</Attr>
              </AttrBox>
              <AttrBox>
                <Attr>8</Attr>
              </AttrBox>
            </StyledSlider>
          </DesignBox>
          <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
          <LetterBtn onClick={linkLetter}>편지쓰러가기</LetterBtn>

        <Tree>
          <img
            src={process.env.PUBLIC_URL + '/images/tree.png'}
            alt="tree"
            style={{
              width: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: 'auto',
            }}
          />
        </Tree>
        <Snow></Snow>
      </Main>
    </AllContainer>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
  line-height: 2rem;
`;

const SnowmanBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Snowman = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 38vh;
  width: 30vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 3;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

const DesignBox = styled.div`
  width: 85%;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 9%;
  border-radius: 5px;
  background-color: #d3dff3;
  padding: 2.5% 2%;
  z-index: 99;
`;

const DesignBtnBox = styled.div`
  width: 100%;
  height: 120%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const DesignBtn = styled.div`
  width: 49%;
  font-size: 1.5em;
  line-height: 1.5em;
  border-radius: 5px;
  background-color: #a2afc7;
  
  &:hover {
    color: white;
    background-color: #33374a;
    cursor: pointer;
  }
`;
  const StyledSlider = styled(Slider)`
    width: 100%;
    margin: auto;
    justify-content: space-between;
    text-align: center;
    overflow: hidden;
    padding: 0.5% 0;

    .slick-track {
      display:flex;
    }
  `;

const AttrBox = styled.div`
`;


const Attr = styled.div`
  position:relative;
  color:black;
  max-width: 140px;
  max-height: 140px;
  margin: 0 5px;
  border: 1px solid #eef0f5;
  outline: 3px solid #f7f9fd;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  
  & img {
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }

  &:hover {
  }
`;

const BackBtn = styled.div`
  position: absolute;
  width: 20%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #999;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #646464;
    cursor: pointer;
  }
`;

const LetterBtn = styled.div`
  position: absolute;
  width: 30%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #ce4545;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  right: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
`;

const Tree = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: 2;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
  z-index: 1;
`;
