// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas utilizadas
import App from "./App"
import Cadastro_livro from "../Components/Cadastro_livro"
import Editar from "../Components/Editar"
import Home from "../pages/Home"
import Cards_livro from "../Components/Cards_livro"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaErro />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/cadastralivro",
                element:<Cadastro_livro/>
            },
            {
                path:"/editar/:id",
                element:<Editar/>
            },
             {
                path:"/Cardslivro",
                element:<Cards_livro/>
            }
        ]
    }
])

export default router;