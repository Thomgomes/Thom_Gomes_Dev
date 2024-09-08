// src/App.js

import AppRouter from "./routes/AppRputer";

function App() {
  return (
    <div className="min-h-screen bg-Branco dark:bg-Preto text-pretobg-Preto dark:text-Branco font-Lato">
      <div className="container mx-auto">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
