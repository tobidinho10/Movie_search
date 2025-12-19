# 🎬 Movie Search Engine

This project is a movie search engine built using React and Vite. It fetches movie data from [The Movie Database (TMDB)](https://www.themoviedb.org) API, allowing users to search for movies and retrieve relevant details.

## ✨ Features

- 🔍 Search for movies by title
- 🎥 Fetch movie details from TMDB API
- ⚡ Responsive and fast UI powered by React and Vite

## 🎥 Demo

Below is a video demonstration of the UI in action:

[![Watch the video](https://img.youtube.com/vi/GmZg0Jr96WE/maxresdefault.jpg)](https://www.youtube.com/watch?v=GmZg0Jr96WE&autoplay=1)




## 🚀 Getting Started

### 📌 Prerequisites

Ensure you have the following installed on your system:

- 🟢 [Node.js](https://nodejs.org/) (LTS version recommended)
- 🛠️ [Git](https://git-scm.com/)

### 📂 Clone the Repository

```sh
git clone https://github.com/vincentbui21/react_movie_search.git
cd react_movie_search
```

### 📦 Install Dependencies

Run the following command to install all required dependencies:

```sh
npm install
```

### 🔑 Setup API Key

1. Create an account on [TMDB](https://www.themoviedb.org/signup).
2. Navigate to [API Settings](https://www.themoviedb.org/settings/api) and generate an API Key & API Token.
3. Open `./services/api.js` and replace the placeholder with your API key and API token:

```js
const API_KEY = "YOUR_API_KEY_HERE";
const API_TOKEN = "YOUR_API_TOKEN_HERE";
```

### ▶️ Run the Application

Start the development server with:

```sh
npm run dev
```

This will launch the app, and you can access it at `http://localhost:5173/` (default Vite port).

## 📦 Build for Production

To create a production-ready build, run:

```sh
npm run build
```

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## 🤝 Contributions

Pull requests are welcome! If you have any improvements or bug fixes, feel free to contribute.

