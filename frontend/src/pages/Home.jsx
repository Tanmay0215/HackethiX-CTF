import ReactTypingEffect from "react-typing-effect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "../components/Content";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.cookie =
      "debug_info=Q1RGe2Nvb2tpZV9tb25zdGVyfQ==; path=/; Secure;";
  }, []);

  const notifySuccess = () =>
    toast.success("🎉 Flag Unlocked!! CTF{cl1ck3r_g4m3_pr0}");

  function logFlag() {
    console.log("Looking for flags? CTF{c0ns0l3_l0gg3r}");
  }

  setInterval(logFlag, 60000);

  // async function callbackend() {
  //   const res = await fetch("http://localhost:8000/api/status", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CTF-Flag": "CTF{h34d3r_sp0tt3r}",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // }

  // callbackend();

  function secretButton() {
    let clicks = 0;
    clicks++;
    if (clicks === 1) {
      notifySuccess();
      // console.log("Flag Unlocked!! CTF{cl1ck3r_g4m3_pr0}");
    }
  }
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        pauseOnFocusLoss={false}
      />

      <nav className="navbar">
        <h2>Hackethix CTF Challenge</h2>
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </nav>

      <main>
        <section>
          <h1>
            <ReactTypingEffect
              text={["Are you ready!!", "Find 10 Flags to win the game!!"]}
              speed={75}
              eraseSpeed={50}
              cursor={"_"}
            />
          </h1>

          <button onClick={secretButton}>Reveal a Flag</button>
        </section>
        <Content />
      </main>
      <footer>
        <div>
          <h4>Follow Us</h4>
          <a href="./Flag" target="_blank">
            <img src="path-to-facebook-icon.png" alt="Facebook" />
          </a>
        </div>

        <div>
          <h4>Join Our 3-Day Bootcamp</h4>
          <a
            href="https://yourwebsite.com/bootcamp"
          >
            Click here to learn more and register!
          </a>
        </div>

        <div>
          <p>&copy; 2024 Ticketing Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
