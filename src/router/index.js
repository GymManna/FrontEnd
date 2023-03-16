import { createRouter, createWebHistory } from "vue-router"

// auth
import SignIn from "../views/auth/SignIn";
import SignInEmail from "../views/auth/SignInEmail";
import SignUp from "../views/auth/SignUp";
import SignUpKakao from "../views/auth/SignUpKakao";
import MyPageMenu from "../views/user/MyPageMenu";

// gathering
import JoinedGathering from "../views/user/JoinedGathering";
import MyCommGathering from "../views/user/MyCommGathering";
import MyCommPhoto from "../views/user/MyCommPhoto";
import EditMyInfo from "../views/user/EditMyInfo";
import ArticleGathering from "../views/article/gathering/ArticleGathering";

// photo
import ArticlePhoto from "../views/article/photo/ArticlePhoto";
import DetailArticlePhoto from '../views/article/photo/DetailPhoto';
import CreateArticlePhoto from '../views/article/photo/CreateArticlePhoto';

// 라우터 설계
const routes = [
    {
      path: "/",
      name: "SignIn",
      component: SignIn,
      
    },
    {
      path: "/signinemail",
      name: "SignInEmail",
      component: SignInEmail,
      
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/signupkakao",
      name: "SignUpKakao",
      component: SignUpKakao,
    },
    {
      path: "/mypagemenu",
      name: "MyPageMenu",
      component: MyPageMenu,
    },
    {
      path: "/joinedgathering",
      name: "JoinedGathering",
      component: JoinedGathering,
    },
    {
      path: "/mycommgathering",
      name: "MyCommGathering",
      component: MyCommGathering,
    },
    {
      path: "/mycommphoto",
      name: "MyCommPhoto",
      component: MyCommPhoto,
    },
    {
      path: "/editmyinfo",
      name: "EditMyInfo",
      component: EditMyInfo,
    },
    {
      path: "/gathering",
      name: "ArticleGathering",
      component: ArticleGathering,
      
    },
    {
      path: "/photo",
      name: "ArticlePhoto",
      component: ArticlePhoto,
      
    },
    {
      path: "/photo/:id",
      name: "DetailArticlePhoto",
      component: DetailArticlePhoto,
      
    },
    {
      path: "/photo/create",
      component: CreateArticlePhoto
    }
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;