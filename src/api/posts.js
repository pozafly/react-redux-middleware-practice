// n 밀리세컨드 동안 기다리는 프로미스를 만들어주는 함수
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어를 배워보자',
    body: '리덕스 미들웨어를 직접 만들어보면 이해가 쉽죠',
  },
  {
    id: 2,
    title: 'redux-thunk를 사용해보자',
    body: 'redux-thunk를 사용해 비동기 작업 처리!',
  },
  {
    id: 3,
    title: 'redux-saga도 사용해보자',
    body: '니중엔 redux-saga를 사용해 비동기 작업 처리!',
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

export const getPostById = async (id) => {
  await sleep(500);
  // id로 찾아서 반환
  return posts.find((post) => post.id === id);
};
