import axios from "axios";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter;

  function login() {
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        router.push("/admin");
        prompt("성공1")
      }
    });
  }

  return (
    <div
      style={{
        padding: "80px 30px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2>Log in.</h2>
      <form>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <input
            type="text"
            placeholder="ID"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #eee",
              color: "white",
              padding: "20px 0",
            }}
          />
        </div>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <input
            type="text"
            placeholder="password"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid #eee",
              padding: "20px 0",
              color: "white",
            }}
          />
        </div>
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "58px",
              backgroundColor: "#eee",
              border: "none",
            }}
            onClick={login}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
