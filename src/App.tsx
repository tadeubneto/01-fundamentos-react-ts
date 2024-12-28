import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./globals.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tadeubneto.png',
      name: 'Tadeu',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-12-23 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tadeubneto.png',
      name: 'Tadeu Neto',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-12-23 20:01:01')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
            post={post}
            />
          )
        })}
        </main>
      </div>
    </div>
  );
}
export default App;
