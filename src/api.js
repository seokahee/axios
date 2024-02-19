import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    console.log("요청합니다");
    return config;
  },
  function (error) {
    console.log("요청이 실패했습니다.");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    console.log("응답입니다");
    return response;
  },
  function (error) {
    console.log("응답이 실패했습니다");
    return Promise.reject(error);
  }
);
// 결과 : 요청 성공, 응답 실패
// 이유 :  404 error = > const response = await api.get("/posts");
// 데이터 요청을 todos가 아닌  posts로 했기 때문.
// todos로 바꾸면 요청과 응답이 정상적으로 출력됩니다

export default api;
