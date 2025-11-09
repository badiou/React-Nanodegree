import "./App.css";
import logo from "./logo.svg";

// Use React and the data below to display a list of users alongside their favorite movies.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

const App = () => {
  
  return (
    
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Favorite Movies</h2>
      <ul>{profiles.map((profile)=>(
        <li key={profile.id}>
            Le film préféré de {users[profile.userID].name} est {movies[profile.favoriteMovieID].name}.
        </li>
      ))}
      </ul>
       <h2>Liste utilisateurs qui ont ajouté les films à leur favori</h2>
       <ul>
        {Object.values(movies).map((movie)=>(
          <div key={movie.id}>
            <h3 key={movie.name}>Film: {movie.name}</h3>
            
          {
            profiles.filter(profile=>movie.id === Number(profile.favoriteMovieID)).length > 0 ?
            (<ul>
            {
              profiles.filter((profile)=>(movie.id === Number(profile.favoriteMovieID)))
                .map((profile)=>(
                    <li key={profile.id}>
                      {users[profile.userID].name}
                    </li>
              ))
            }
            </ul>):
            (
              <p>Aucun utilisateur n'a ajouté ce film en favori</p>
            )
          }
          </div>
        ))}
       </ul>
    </div>
  );
};

export default App;
