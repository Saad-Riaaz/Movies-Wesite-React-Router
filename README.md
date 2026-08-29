# 🎬 Movie Website

A modern and responsive **movie discovery web application** built with **React.js** and the **TMDB API**. Users can explore popular, trending, top-rated, now-playing, and upcoming movies, search for movies, and view detailed information about each movie.

The project was created to practice **React.js, REST API integration, Axios, React Router, state management, and responsive UI development**.

---

## 🚀 Features

* 🎬 Browse popular movies
* 🔥 Explore trending movies
* ⭐ Discover top-rated movies
* 🎥 View now-playing movies
* 📅 Explore upcoming movies
* 🔍 Search for movies
* 📖 View detailed movie information
* 👥 View movie cast and credits
* 🔐 Login & Signup functionality
* 📱 Responsive design
* ⚡ Fast API requests using Axios
* 🧩 Reusable React components
* 🧭 Navigation using React Router

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Axios**
* **React Router**
* **TMDB API**
* **HTML5**
* **CSS3**
* **Vite**

---

## 🌐 API

This project uses the **TMDB API** to retrieve movie information.

The application uses movie data such as:

* Movie titles
* Posters
* Backdrops
* Release dates
* Ratings
* Overview
* Genres
* Cast & crew
* Movie details

> You need your own TMDB API credentials to run this project locally.

---

## 📂 Project Structure

```text
Movie-Website/
│
├── public/
│
├── src/
│   ├── API/
│   │   └── MovieApi.js
│   │
│   ├── Components/
│   │   ├── Cards.jsx
│   │   ├── FormData.jsx
│   │   └── ...
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd Movie-Website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_TMDB_API_KEY=your_api_key
VITE_TMDB_TOKEN=your_access_token
```

Replace the values with your own TMDB credentials.

### ⚠️ Important

Do **not** upload your `.env` file or API credentials to GitHub.

Make sure `.env` is included in your `.gitignore`:

```text
.env
node_modules
dist
```

---

## 🎯 Main API Functions

The application uses API functions for different movie categories:

```text
getPopularMovies()
getTrendingMovies()
getTopRatedMovies()
getNowPlayingMovies()
getUpcomingMovies()
searchMovies()
getMovieDetails()
getMovieCredits()
```

These functions allow the React application to communicate with the TMDB API.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

---

## 📚 What I Learned

While building this project, I practiced:

* React components
* Props
* `useState`
* `useEffect`
* React Router
* Route parameters
* API integration
* Axios
* Async/Await
* REST APIs
* Search functionality
* Loading API data
* Handling API responses
* Environment variables
* Form handling
* Login & Signup logic
* Responsive CSS
* Git & GitHub

---

## 🔮 Future Improvements

Possible improvements for future versions:

* ❤️ Add movies to favorites
* 📌 Watchlist functionality
* 🎞️ Movie trailers
* 🌙 Dark/Light mode
* 📄 Pagination
* 🔐 Secure backend authentication
* 💾 Database integration
* 👤 User profiles
* ⭐ User movie ratings
* 🚀 Production deployment

---

## 👨‍💻 Author

**Saad Riaz**

Software Engineering Student | Front-End Developer

### Skills

* React.js
* JavaScript
* HTML5
* CSS3
* REST APIs
* Axios
* React Router
* Git & GitHub

---

## ⭐ Project

If you like this project, feel free to give the repository a ⭐ on GitHub.
