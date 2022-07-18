import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

export default function admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안됨
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function logout() {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }

  return (
    <div style={{
      margin: "0 auto",
      padding: "80px 30px"
    }}>
      {isLogin && (
        <button
          style={{
            width: "200px",
            height: "58px",
            backgroundColor: "#eee",
            border: "none",
            margin: "0 auto",
            display: "block"
          }}
          onClick={logout}
        >
          Log out
        </button>
      )}
    </div>
  );
}
