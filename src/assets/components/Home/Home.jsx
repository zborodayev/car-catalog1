import { useState } from 'react'
import styles from './Home.module.css'

export const Home = () => {
    const [xod, setXod] = useState('')

    const creatxod = e => {
        console.log(xod)
        e.preventDefault()
    }

    if (xod === 1) {
      return {
        
      }
    }

  return (
    
    <div>
        <div className={styles.div}>
            <h1>Крестики нолики</h1>
        </div>
        <div>
            <input className={styles.input} placeholder='1 - нолик  2 - крестик' onChange={e => setXod(e.target.value)} value={xod}/>
            <button className={styles.button} onClick={creatxod}>походить</button>
        
        </div>
    </div>
)

}
