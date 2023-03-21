import { createRouter, createWebHistory } from "vue-router"

// auth
import SignIn from "../views/auth/SignIn";
import SignInEmail from "../views/auth/SignInEmail";
import SignUp from "../views/auth/SignUp";
import SignUpKakao from "../views/auth/SignUpKakao";

// user
import MyPage from "@/views/user/MyPageView";
import MyPageMenu from "@/components/user/MyPageMenu";
import JoinedGathering from "@/components/user/JoinedGathering";
import MyCommGathering from "@/components/user/MyCommGathering";
import MyCommPhoto from "@/components/user/MyCommPhoto";
import EditMyInfo from "@/components/user/EditMyInfo";

// gathering
import ArticleGathering from "../views/article/gathering/ArticleGatheringView";
// import GatheringMainMap from "@/components/gathering/GatheringMainMap";
import DetailArticleGathering from "../views/article/gathering/DetailArticleGatheringView";
import CreateArticleGathering from "../views/article/gathering/CreateArticleGatheringView";
import EditArticleGathering from "../views/article/gathering/EditArticleGatheringView";

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
      path: "/mypage",
      name: "MyPage",
      component: MyPage,
      redirect: "/mypage/joinedgathering",
      children: [
        {
          path: "mypagemenu",
          component: MyPageMenu
        },
        {
          path: "joinedgathering",
          component: JoinedGathering
        },
        {
          path: "mycommgathering",
          component: MyCommGathering
        },
        {
          path: "mycommphoto",
          component: MyCommPhoto
        },
        {
          path: "editmyinfo",
          component: EditMyInfo
        },
      ]
    },
    {
      path: "/gathering",
      name: "ArticleGathering",
      component: ArticleGathering,
      // children: [
      //   {
      //     path: "gatheringmainmap",
      //     component: GatheringMainMap
      //   }
      // ]
    },
    {
      path: "/gathering/detail",
      component: DetailArticleGathering,
    },
    {
      path: "/gathering/create",
      component: CreateArticleGathering,
    },
    {
      path: "/gathering/edit",
      component: EditArticleGathering,
    },
    {
      path: "/photo",
      name: "ArticlePhoto",
      component: ArticlePhoto,
      
    },
    {
      path: "/photo/:articlePnum",
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