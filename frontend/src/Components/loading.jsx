import React from 'react'
import styles from '../Styles/loading.module.css'
function Loading() {
  return (
    <div id={styles.container}>
    <div class={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
   </div>
  )
}

export default Loading