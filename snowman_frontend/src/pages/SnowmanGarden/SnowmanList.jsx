import { useState } from 'react';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';
import styled from 'styled-components';
import getZzambbangSnowman from '../../store/services/user.service';
import axios from 'axios';
import { useEffect } from 'react';
export default function SnowmanList({ props }) {
  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(7);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/snowmans/zzambbang')
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  if (data) {
    return (
      <>
        {data.length > 0 ? (
          data
            .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
            .map((a, i) => {
              const snowmanIdDivmod = a.snowmanId % 7;
              // console.log(typeof(a.snowmanId))
              return (
                <div key={a.snowmanId}>
                  <DefaultSnowman>
                    {a.snowmanId === 1 ? 
                      // console.log(a.snowmanId)
                        <div style={{width:'500px', height:'500px', backgroundColor: 'orange', zIndex: '999'}}>제발 나와</div>
                        // <img
                        //   src={
                        //     process.env.PUBLIC_URL +
                        //     '/images/snowmanList/SantaSanta.png'
                        //   }
                        //   alt="snowman"
                        // />
                      : <div style={{width:'500px', height:'500px', backgroundColor: 'blue', zIndex: '999'}}>제발 나와</div>
                      

                      // <img
                      //   src={process.env.PUBLIC_URL + '/images/snowman.png'}
                      //   alt="snowman"
                      // />
                    }

                    {snowmanIdDivmod === 2 ? (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/images/snowmanList/' +
                          a.snowmanType +
                          '.png'
                        }
                        alt="snowman"
                      />
                    ) : (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/images/snowmanList/SantaSanta.png'
                        }
                        alt="snowman"
                      />
                    )}
                  </DefaultSnowman>
                  <SecondLine>
                    <img
                      src={process.env.PUBLIC_URL + '/images/snowman.png'}
                      alt="snowman"
                      className="secondSnowman"
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/images/snowman.png'}
                      alt="snowman"
                      className="thirdSnowman"
                    />
                  </SecondLine>
                  <img
                    src={process.env.PUBLIC_URL + '/images/snowman.png'}
                    alt="snowman"
                    className="firstSnowman"
                  />
                </div>
              );
            })
        ) : (
          <></>
        )}
        <Pagination
          // * 필수 값
          // *활성 페이지
          activePage={page}
          // 페이지당 항목 수
          itemsCountPerPage={7}
          // 페이지 총 아이템수
          totalItemsCount={props.length}
          // 페이지 범위
          pageRangeDisplayed={3}
          // 이전 페이지 탐색 버튼의 텍스트
          prevPageText={<IoMdArrowDropleftCircle />}
          // 다음 페이지 탐색 버튼의 텍스트
          nextPageText={<IoMdArrowDroprightCircle />}
          // 페이지 변경 핸들러 pageNumber를 인수로 수신
          onChange={handlePageChange}
        />
      </>
    );
  }
}

const DefaultSnowman = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SecondLine = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
`;
