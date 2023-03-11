import { createRouter, createWebHistory } from "vue-router"

import SignIn from "../views/auth/SignIn";
import SignInEmail from "../views/auth/SignInEmail";
import SignUp from "../views/auth/SignUp";
import SignUpKakao from "../views/auth/SignUpKakao";
import ArticleGathering from "../views/article/gathering/ArticleGathering";
import ArticlePhoto from "../views/article/photo/ArticlePhoto";
import DetailArticlePhoto from '../views/article/photo/DetailPhoto';

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
      // name: "DetailArticlePhoto",
      component: DetailArticlePhoto,
      
    }
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;