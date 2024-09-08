import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThomtyError from "../assets/thomtyError.gif"

export const Page404 = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Decrementa o contador a cada segundo
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/"); // Redireciona para a página inicial
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <main className="grid min-h-full place-items-center bg-Branco dark:bg-Preto text-gray-600 dark:text-gray-500 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-500 sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-base leading-7">
            A página que você está procurando não existe, ou não foi encontrada.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-500 dark:bg-Blue2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar ao Inicio
            </Link>
          </div>
            <p className="mt-4">
              Você será redirecionado para a página inicial em {seconds}{" "}
              segundos.
            </p>
            <img src={ThomtyError} alt="Thomty.error" />
        </div>
      </main>
    </>
  );
};
