import styles from './Home.module.css'
export const Home = () => {
  const Buttons = (index) => {
    return (
      <button onClick={() =>  handleClick(index)} className={styles.button}></button>
    )
  }
  const handleClick = (index) => {
    console.log(`click`,index)
  }
  return (

    <div>
      <div className={styles.div}>
      <h2>ход:</h2>
        <div>
          <Buttons index={1}></Buttons>
          <Buttons index={2}></Buttons>
          <Buttons index={3}></Buttons>
        </div>
        <div>
          <Buttons index={4}></Buttons>
          <Buttons index={5}></Buttons>
          <Buttons index={6}></Buttons>
        </div>
        <div>
          <Buttons index={7}></Buttons>
          <Buttons index={8}></Buttons>
          <Buttons index={9}></Buttons>
        </div>
      </div>
    </div>
  )
}

