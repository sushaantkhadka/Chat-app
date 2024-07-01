import React from 'react'
import { styles } from '../styles'

export default function Input({placeholder}) {
  return (
    <form>
        <input type="text" className={`${styles.input}`} placeholder={placeholder} />
    </form>
  )
}
