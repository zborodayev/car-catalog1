import { useState } from 'react'
import styles from './Home.module.css'



export const Home = () => {
  const [password, setPassword] = useState()
  const createImg = () => {
  
  const Tpassword = 678912345
  {password == Tpassword ? (
    console.log('passwoed is correct')

  )
  : `https://rule34.xxx/index.php?page=post&s=view&id=10306139 
    https://rule34.xxx/index.php?page=post&s=view&id=10302834
    https://rule34.xxx/index.php?page=post&s=view&id=8890772
    https://rule34.xxx/index.php?page=post&s=view&id=8890670
    https://rule34.xxx/index.php?page=post&s=view&id=8890926
    https://rule34.xxx/index.php?page=post&s=view&id=8881035
    https://rule34.xxx/index.php?page=post&s=view&id=8823082
    https://rule34.xxx/index.php?page=post&s=view&id=8771740
    https://rule34.xxx/index.php?page=post&s=view&id=8744161
    https://rule34.xxx/index.php?page=post&s=view&id=8663620
    https://rule34.xxx/index.php?page=post&s=view&id=8654727
    https://rule34.xxx/index.php?page=post&s=view&id=8646689
    https://rule34.xxx/index.php?page=post&s=view&id=5083478
    `
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


