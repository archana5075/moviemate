import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png"; // Import a backup image if needed
export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: Backup;
  // Construct the image URL using the poster_path from the movie object

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={
            imageUrl ||
            "https://via.placeholder.com/500x750?text=No+Image+Available"
          }
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title || "Movie Title"}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview ||
            "This is a brief overview of the movie. It provides a summary of the plot and main themes."}
        </p>
      </div>
    </div>
  );
};
