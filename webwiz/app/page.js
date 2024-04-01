'use client'
import Landing from "./components/landing";
import Mid from "./components/midHome";
import Login from "./login/Login";

function Main() {
  return(
    <main className="">
    <Landing />
    <Mid/>
  </main>
  )
}
export default function Home() {
  let isLogin = false;
  return (
    <>
    {isLogin ? <Main/> : <Login/> }
    </>
  );
}