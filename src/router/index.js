import { createRouter, createWebHistory } from "vue-router"

import ArticleGathering from "../views/article/gathering/ArticleGathering";
import ArticlePhoto from "../views/article/photo/ArticlePhoto";
import DetailArticlePhoto from '../views/article/photo/DetailPhoto';
import SignIn from "../views/auth/SignIn";
import SignInEmail from "../views/auth/SignInEmail";
import SignUp from "../views/auth/SignUp";

// 라우터 설계
const routes = [
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
      
    },
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
    }
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export default router;