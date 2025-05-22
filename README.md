# User Profile App

A simple React application for Educase ReactJs internship assignment that allows users to sign up and view their profile information immediately after registration. This app demonstrates form handling, state transfer using `react-router-dom`, and conditional rendering of user data.

## Deployed Link

[Live Demo](https://educase-devtask.vercel.app/)

## 🔧 Features

- 📝 Signup form with name, email, phone, etc.
- 👤 Profile page showing submitted data
- 🎨 Styled with Tailwind CSS

## 🛠 Tech Stack

- React(Vite)
- Tailwind CSS
- JavaScript (ES6+)

## 📁 Folder Structure

```

src/
├── pages/
│   └── AuthForm.js       # Signup and Login form page
│   └── Profile.js        # Profile display page
│   └── Home.js           # Home page
│
├── App.js                # Main app routing
├── main.js               # Entry point
└── ...

```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/JeetDas5/Educase-devtask.git
```

cd Educase-devtask

````

### 2. Install dependencies

```bash
npm install
````

### 3. Run the app

```bash
npm start
```

App runs locally at `http://localhost:5173`.

## 📦 How It Works

1. User fills the **Signup** form.
2. On submit, data is passed to the **Profile** page using:

   ```js
   navigate("/Profile", { state: { ...formData } });
   ```

3. The **Profile** page reads this data with:

   ```js
   const location = useLocation();
   const profileData = location.state;
   ```

4. Profile information is then rendered based on `profileData`.

## 🔒 Optional Enhancements

- Add localStorage/sessionStorage for data persistence on refresh.
- Integrate form validation (e.g., with Yup or Formik).
- Add backend support using Node.js/Express & MongoDB.

## 🧑‍💻 Author

Made by [Jeet Das](https://github.com/JeetDas5) <br/>
Feel free to reach out for any questions or suggestions!

## 📄 License

MIT License

---
