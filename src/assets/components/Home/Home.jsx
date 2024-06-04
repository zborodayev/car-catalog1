import { useState } from 'react'
import styles from './Home.module.css'



export const Home = () => {
  const [password, setPassword] = useState()
  const createImg = () => {
  
  const Tpassword = 678912345
  {password == Tpassword ? (
    console.log('passwoed is correct')

  )
  : 
  (
    console.log('password is incorrect')
  )}
  }
  return (
    <div>
      <input placeholder='password' onChange={e => setPassword(e.target.value)} value={password} />
      <button onClick={createImg} className={styles.btn}>Submit</button>
    </div>
  )
}


