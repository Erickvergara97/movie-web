import styles from './App.module.css';
import { Moviesgrid } from './MoviesGrid';

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Moviesgrid/>
      </main>
    </div>
  );
}

export default App;
