"use client"

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='topper'> 
        <h2 className='siteLogo neonText'>두더지토토.com</h2>
      </div>

      <div className={styles['maintab']}>
          <h1 className='blueNeonText'>두 더 지 토 토 . c o m</h1>
          <h2>두더지토토는 가짜 토토 사이트입니다. 입금 출금이 불가능하며 현금 유통이 불가합니다.</h2>
      </div>
    </div>
  )
}
