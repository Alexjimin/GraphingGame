"use client"

import Link from "next/link"

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='topper'> 
        <Link href="/" className='siteLogo neonText'>두더지토토.com</Link>
      </div>

      <div className={styles['maintab']}>
          <h1 className='blueNeonText'>두 더 지 토 토 . c o m</h1>
          <h2>두더지토토는 가짜 토토 사이트입니다. 입금 출금이 불가능하며 현금 유통이 불가합니다.</h2>
      </div>

      <div className='iconMenu'>
        <Link href='/graph' className='icon neonText'>그래프게임<br/>하러가기</Link>
        <Link href="/holjjak" className='icon neonText'>홀짝<br/>하러가기</Link>
      </div>
    </div>
  )
}
