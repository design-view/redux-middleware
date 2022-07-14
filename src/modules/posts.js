//액션타입, 액션생성함수=> thunk함수, 초깃값, 리듀서
//프로미스가 시작, 성공, 실패 했을때 다른 액션을 디스패치해야한다.
//각 프로미스마다 thunk함수를 만들어 주어햐 합니다.
//리듀서에서 액션에 따라 로딩중, 결과, 에러상태를 변경
import * as postAPI from '../api/posts'  // api/posts안의 함수 모두 불러오기
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// 초깃값
// {
//     loading: false,
//     data: initialData,
//     error: null
// }
// 반복되는 초기값 {}를 initial()를 실행하여 리턴받음
const initialState = {
    posts : reducerUtils.initial(),
    post : reducerUtils.initial()
}
// 액션타입
// 포스트여러개 조회하기
const GET_POSTS = "GET_POSTS";    //요청시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; //요청성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR";    //요청실패

// 포스트하나 조회하기
const GET_POST = "GET_POST";   //요청시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS"; 
const GET_POST_ERROR = "GET_POST_ERROR";

//thunk함수 
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts)
// 하나만 조회하는 thunk함수
export const getPost = createPromiseThunk(GET_POST,postAPI.getPostById)

export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading()
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload)
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.error)
            }
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading()
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.payload)
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.error)
            }
        default:
            return state
    }
}



