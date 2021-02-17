import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <h1>BEST OF BANGTAN</h1>
        <Link to="/">HOME</Link>
        <Link to="/songs/new">Submit Your Favorite</Link>
        <Link to="/search">Search By Year</Link>
      </nav>
    </div>
  );
}
