import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Books from "./books/Books";
import Music from "./music/Music";
import MoviesTV from "./movies_tv/MoviesTV";
import Games from "./games/Games";
import Calendar from "./calendar/Calendar";
import Contact from "./contact/Contact";
import ErrorPage from "./error/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="books" element={<Books />} />
        <Route path="music" element={<Music />} />
        <Route path="movies_tv" element={<MoviesTV />} />
        <Route path="games" element={<Games />} />
        <Route path="calendar" element={<Calendar />}>
          <Route path=":year/:month/:date" element={<Calendar />} />
          <Route path=":year/:month" element={<Calendar />} />
        </Route>
        <Route path="contact_me" element={<Contact />} />
        <Route element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
