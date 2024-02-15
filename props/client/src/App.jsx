import  { React ,useState}  from 'react'

import './App.css'
import MoviesList from './MoviesList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovies] = useState([

    {id:uuidv4(),
      main_img: "https://th.bing.com/th/id/OIP.Fp3YK5LzRTqnrXNWVMyHOQHaJQ?rs=1&pid=ImgDetMain",
      title: "Wonka",
      duration: "117 min",
      date: "décembre 2023",
      genre: "aventure famille fantastiqque",
      description: "Découvrez la jeunesse de Willy Wonka, l’extraordinaire inventeur, magicien et chocolatier de l’univers féérique de Charlie et la chocolaterie de Roald Dahl, dans le film WONKA. Timothée Chalamet incarne ce jeune homme débordant d’idées et déterminé à changer le monde…",
    },
    {id:uuidv4(),
      main_img: "https://th.bing.com/th/id/OIP.Fp3YK5LzRTqnrXNWVMyHOQHaJQ?rs=1&pid=ImgDetMain",
      title: "Wonka",
      duration: "117 min",
      date: "décembre 2023",
      genre: "aventure famille fantastiqque",
      description: "Découvrez la jeunesse de Willy Wonka, l’extraordinaire inventeur, magicien et chocolatier de l’univers féérique de Charlie et la chocolaterie de Roald Dahl, dans le film WONKA. Timothée Chalamet incarne ce jeune homme débordant d’idées et déterminé à changer le monde…",
    },
    {id:uuidv4(),
      main_img: "https://th.bing.com/th/id/OIP.Fp3YK5LzRTqnrXNWVMyHOQHaJQ?rs=1&pid=ImgDetMain",
      title: "Wonka",
      duration: "117 min",
      date: "décembre 2023",
      genre: "aventure famille fantastiqque",
      description: "Découvrez la jeunesse de Willy Wonka, l’extraordinaire inventeur, magicien et chocolatier de l’univers féérique de Charlie et la chocolaterie de Roald Dahl, dans le film WONKA. Timothée Chalamet incarne ce jeune homme débordant d’idées et déterminé à changer le monde…",
    },
    {id:uuidv4(),
      main_img: "https://th.bing.com/th/id/OIP.Fp3YK5LzRTqnrXNWVMyHOQHaJQ?rs=1&pid=ImgDetMain",
      title: "Wonka",
      duration: "117 min",
      date: "décembre 2023",
      genre: "aventure famille fantastiqque",
      description: "Découvrez la jeunesse de Willy Wonka, l’extraordinaire inventeur, magicien et chocolatier de l’univers féérique de Charlie et la chocolaterie de Roald Dahl, dans le film WONKA. Timothée Chalamet incarne ce jeune homme débordant d’idées et déterminé à changer le monde…",
    },
  ])
  return (
    <div className='App'>
      
    <MoviesList movies={movies}/> 
    
    </div>
  )
}

export default App
