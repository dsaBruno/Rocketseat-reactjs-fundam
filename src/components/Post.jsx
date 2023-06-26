import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/dsabruno.png" />
          <div className={styles.authorInfo}>
            <strong>Bruno Alves</strong>
            <span>Web Cansado</span>
          </div>
        </div>

        <time></time>
      </header>
    </article>
  )
}