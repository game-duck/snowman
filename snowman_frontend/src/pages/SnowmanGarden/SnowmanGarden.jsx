import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';

import ShareUrl from './ShareUrl';
import { useNavigate } from 'react-router';
import CaptureImage from './CaptureImage';
import BugerModal from './BugerModal';

import data from '../../data';
import SnowmanList from './SnowmanList';
import Test from './Test';

export default function SnowmanGarden() {
  const navigate = useNavigate();
  const linkSnowmanDesign = () => {
    navigate('/snowmanDesign');
  };

  const Data = data;

  return (
    <AllContainer>
      <Test></Test>
      <Main>
        <BugerModal />
        <MainText>
          <span style={{ color: '#f5c51f' }}>수지</span> 님의 정원에
          <br></br>
          <span style={{ color: '#ce4545' }}>0</span> 개의 눈사람이
          만들어졌어요!
          <br></br>총 <span style={{ color: '#ce4545' }}>0</span> 개의 메세지
          <br></br>
          <ShareUrl />
          <CaptureImage />
        </MainText>

        <Garden>
          <Snowman>
            <SnowmanList props={Data} />
          </Snowman>

          <Santa>
            <img
              src={process.env.PUBLIC_URL + '/images/treeHomeSanta.png'}
              alt="treeHomeSanta"
              style={{
                width: '45vh',
                // objectFit: 'cover',
                display: 'block',
                margin: 'auto',
              }}
            />
          </Santa>

          <Snow></Snow>

          <DesignBtn onClick={linkSnowmanDesign}>눈사람 만들어주기</DesignBtn>
        </Garden>
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
`;

const Garden = styled.div``;
const Snowman = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 99;
  width: 100%;

  .firstSnowman {
    display: block;
    margin: auto;
  }
`;
const Santa = styled.div`
  position: absolute;
  bottom: 38vh;
  width: 100%;
  z-index: 1;
`;
const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 40vh;
`;

const DesignBtn = styled.div`
  position: absolute;
  width: 70%;
  bottom: 3vh;
  font-size: 1.5rem;
  background-color: #ce4545;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 15%;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
`;
