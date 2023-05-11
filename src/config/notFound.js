import styles from './notFound.module.css'

const NotFound = ( {greeting} ) => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.message}>{ greeting}</h1>
      <img src='https://i.postimg.cc/yNrMrQ0B/NotFound.gif' className={styles.gif} alt='404 Not found'></img>
    </div>
  )
}

export default NotFound;