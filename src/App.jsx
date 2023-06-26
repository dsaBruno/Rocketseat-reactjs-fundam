import {Post} from './components/Post';
import { Header } from './components/header';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author= "Bruno Alves"
          content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus animi, sequi veritatis earum ducimus dolore temporibus quae inventore aut explicabo optio rerum officia nesciunt magnam aliquam facilis amet. Voluptatum!"
        />
        <Post 
          author= "Alves Bruno"
          content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus animi, sequi veritatis earum ducimus dolore temporibus quae inventore aut explicabo optio rerum officia nesciunt magnam aliquam facilis amet. Voluptatum!"
        />
        </main>
      </div>
    </div>
  ) 
}



