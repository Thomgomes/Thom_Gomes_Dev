// src/App.js

import AppRouter from "./routes/AppRputer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t to-Claro_Primario from-Claro_Secundario dark:to-Escuro_Primario dark:from-Escuro_Secundario text-quasePreto dark:text-Claro_Primario font-Lato">
        <AppRouter />
    </div>
  );
}

export default App;
