const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image:
      'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Dv7/image/hsyrqS-Pjg5MnN01sKVBul1L-vo.png',
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image:
      'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Dv7/image/hsyrqS-Pjg5MnN01sKVBul1L-vo.png',
  },
];

export default {
  list(query) {
    return new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 200);
    });
  },
};
