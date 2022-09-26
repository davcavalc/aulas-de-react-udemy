import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
 const [searchParams] = useSearchParams();
 const url = "http://localhost:3000/products?" + searchParams;
 const { data: items, loading, error } = useFetch(url);
 return (
  <div>
   <h1>Resultados disponíveis</h1>
   <ul>
    {items &&
     items.map((item) => (
      <div className="flex justify-center">
       <li
        className="flex items-center flex-col border-[1px] border-solid rounded-[5px] p-10 mt-2 backgrad m-1.5 w-[25%]"
        key={item.id}
       >
        <h2 className="font-bold p-2 uppercase">{item.nome}</h2>
        <p className="text-white font-semibold">R$: {item.preco}</p>
        {/* 4 - ROTA DINÂMICA */}
        <Link className="p-2 text-white underline" to={`/products/${item.id}`}>
         Detalhes
        </Link>
       </li>
      </div>
     ))}
   </ul>
  </div>
 );
};

export default Search;
