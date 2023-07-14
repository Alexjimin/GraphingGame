"use client"
import Link from "next/link"

import { useEffect, useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [money, setMoney] = useState(1000000);
  const [timeLeft, setTimeLeft] = useState(5);
  const [betStatus, setBetStatus] = useState(0);
  const [holorjjak, setHolorjjak] = useState(0);
  const [keyNumber, setKeyNumber] = useState(1);
  const [betMoney,  setBetMoney] = useState(0);
  const [tempBetting, setTempBetting] = useState(0);

  function setBet(betMoney) {
    if (betStatus===0) {  // 0 before bet 1 betted 2 done betted 3 cant bet
      if (betMoney>money && betMoney > 0) {}
      else
      {
        setMoney(money-betMoney);
        setBetStatus(2);
        setBetMoney(betMoney);
      }
    }
  }

  useEffect(()=>{
    const incer = setInterval(()=>{
      if (timeLeft>0) {
        setTimeLeft(timeLeft-1);
      } else {
      }
    }, 1000);
    const checkSet = setTimeout(()=>{
      if (timeLeft<=0) {
        setKeyNumber(parseInt(Math.random()*9+1));
        if(keyNumber%2==holorjjak) {
          setMoney(money+betMoney*1.5)
        }
        setBetMoney(0);
        setTimeLeft(5);
        setBetStatus(0);
      }
    }, 1000);

    return () => {
      clearInterval(incer);
      clearTimeout(checkSet);
    }
  });
  
  function showBetButton() {
    if (betStatus === 0) {return <p>베팅</p>}
    if (betStatus === 1) {return <p>베팅됨</p>}
    if (betStatus === 2) {return <p>베팅</p>}
    if (betStatus === 3) {return <p>실패</p>}
  }
  
  return (
    <div className='wrapper'>
      <div className='topper'> 
        <Link href="/" className='siteLogo neonText'>두더지토토.com</Link>
        <h2 className='myMoney'>돈: {parseFloat(money).toFixed(0)} 원</h2>
      </div>

      <div className='maintab'>
        <span>
          <div className='time-and-bet'>
            <span className='timeleft neonText'>
              <h1>{timeLeft} 초</h1>
              <h1>숫자: {keyNumber}</h1>
            </span>
            <span className='bet'>
              <div>
                베팅<br />
                <input className='bet-amount' onChange={(e)=>{setTempBetting(e.target.value)}}></input> ₩
              </div>
              <div className={styles['holjjak-button-div']}>
                <button className={styles['hol-button']} onClick={()=>{setHolorjjak(1)}}>홀</button>
                <button className={styles['jjak-button']} onClick={()=>{setHolorjjak(0)}}>짝</button>
                {!holorjjak?<h2>짝</h2>:<h2>홀</h2>}
              </div>
              <div className='button-div'>
                <button className={betStatus===2 || betStatus===3?'bet-button-off':'bet-button-on'} onClick={()=>{setBet(tempBetting)}}>
                  {showBetButton()}
                </button>
              </div>
            </span>
          </div>
          <div></div>
        </span>

        <span>

        </span>
      </div>
    </div>
  )
}
