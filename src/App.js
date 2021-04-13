/*
Public API'lari kullanarak bir applikasyon yazılacak.

  -Olmasini gereken yapiler:
    - fetch api kullanimi
    - async-await kullanimi
    - API datasinin gösterilmesi
    - state kullanimi
    - useEffect kullanimi

  -Kriterler
    - API'dan data cekilmesi
    - Programin düzgün calismasi
    - Kod makyajina dikkat edilmesi
    - En az iki kücük test yazilmasi
*/
import "./App.css";
import Api from "./components/component";

function App() {
  return (
    <div className="App">
      <Api />
    </div>
  );
}

export default App;
