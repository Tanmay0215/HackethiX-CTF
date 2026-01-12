# HackethiX CTF 🚩

Welcome to **HackethiX CTF**, a Vulnerable Web Application designed to test your cybersecurity skills! This project is a React-based Capture The Flag (CTF) challenge where your goal is to explore, inspect, and exploit the application to find hidden flags.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm/yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Tanmay0215/HackethiX-CTF.git
    cd HackethiX-CTF
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

4.  **Open the app:**
    Visit `http://localhost:5173` in your browser.

## 🕵️‍♂️ Challenges / Flags

There are **10 hidden flags** scattered throughout this application. Use your dev tools, basic hacking knowledge, and curiosity to find them all!

| #   | Hint                                                                                                                                 | Difficulty |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| 1   | **Cookie Monster** 🍪 <br> Check your browser's storage.                                                                             | 🟢 Easy    |
| 2   | **Console Log** 🖥️ <br> Developers often leave debug messages behind.                                                                | 🟢 Easy    |
| 3   | **Clicker Game** 🖱️ <br> Sometimes you just need to click the right button.                                                          | 🟢 Easy    |
| 4   | **Meta Data** 🏷️ <br> Information about the page is often hidden in the `<head>`.                                                    | 🟢 Easy    |
| 5   | **CSS Master** 🎨 <br> Styles can hide secrets too. Check global variables.                                                          | 🟢 Easy    |
| 6   | **Local Storage** 🗄️ <br> Persistent data is often stored on the client side.                                                        | 🟢 Easy    |
| 7   | **DOM Inspector** 🔍 <br> specific attributes on elements can reveal secrets.                                                        | 🟢 Easy    |
| 8   | **Hidden JSON** 📄 <br> Check API responses or page data (Flag Page).                                                                | 🟡 Medium  |
| 9   | **SQL Injection** 💉 <br> Try to bypass authentication on the Login page (`admin`/`admin` might not work, but something else might). | 🟡 Medium  |
| 10  | **404 Not Found** 🚫 <br> Sometimes getting lost is the only way to find what you're looking for.                                    | 🟡 Medium  |
| 11  | **Robots Exclusion** 🤖 <br> Check `robots.txt` for instructions (and secrets).                                                      | 🟢 Easy    |

## 🛠️ Built With

- **React** - Frontend library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Toastify** - Notifications

## 🤝 Contributing

This is a learning project! Feel free to fork it, add your own flags, or improve the UI.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFlag`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFlag'`)
4.  Push to the Branch (`git push origin feature/AmazingFlag`)
5.  Open a Pull Request

---

**Happy Hacking!** 💚
