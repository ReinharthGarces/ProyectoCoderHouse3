import styles from './notFound.module.css'

const NotFound = ( {greeting} ) => {
  return (
    <div>
      <h1 className={styles.message}>{ greeting}</h1>
    </div>
  )
}

export default NotFound;