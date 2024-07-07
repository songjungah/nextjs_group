import { Inter } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Header from "@/component/header/header";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "우리 동아리",
  description: "Generated by create next app",
  icons:{
    icon:'/label.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {/* children == page.js */}
        {Children}
      </body>
    </html>
  );
}


// 기본생성시
// layout.js : page.js 를 감싸고 있는 html
// page.js : body태그에 작성할 코드
// globals.css : layout.js 에 포함된 css (모든곳에서 사용)
// page.module.caa : page.js 전용 css 
// favicon.ico 삭제 -> public 폴더에 이미지 넣기 -> metade


// npm run dev

// vercal 에 업로드
// github 에 프로젝트 업로드
// vercal 로그인
// new project
// 업로드한 프로젝트 Import
// [Install Command OVERRIDE] -> npm install
// .env.local 데이터를 Enviroment Variables 에 모두 입력
// Deploy 클릭