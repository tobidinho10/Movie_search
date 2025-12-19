import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMoives] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMoives(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Faild to load movies");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchQuery.trim()) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMoives(searchResults)
            setError(null)
        }catch{
            console.log(err);
            setError("Failed to search for movies...")
        }finally{
            setLoading(false)
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading"> Loading... </div>
            ) : (
                <div className="movies-grid">
                    {movies.map(
                        (movie) =>
                            movie.title
                                .toLowerCase()
                                .startsWith(searchQuery) && (
                                <MovieCard movie={movie} key={movie.id} />
                            )
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
