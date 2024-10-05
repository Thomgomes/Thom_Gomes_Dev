// src/App.js

import AppRouter from "./routes/AppRputer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t to-Claro_Primario from-Claro_Secundario dark:to-Escuro_Primario dark:from-Escuro_Secundario text-pretobg-Preto dark:text-Branco font-Lato">
      <div className="container mx-auto">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
