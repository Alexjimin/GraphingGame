"use client"
import Link from "next/link"

import { useEffect, useState } from 'react';

export default function Graph() {
  const [money, setMoney] = useState(1000000);
  const [multiplyer, setMult] = useState(0.3);
  const [status, setStatus] = useState(1); // 0: stop 1: increment
  const [tempBetting, setTempBetting] = useState(0);
  const [betStatus, setBetStatus] = useState(0);
  const [betting, setBetting] = useState(0);
  const [lastMult, setLastMult] = useState(0);
  const [startMult, setStartMult] = useState(0);

  function setBet(betMoney) {
    if (betStatus===0) {  // 0 before bet 1 betted 2 done betted 3 cant bet
      if (betMoney>money && betMoney > 0) {}
      else
      {
        setMoney(money-betMoney);
        setBetStatus(1);
        setBetting(betMoney);
        setStartMult(multiplyer);
      }
    }
    if (betStatus===1) {
      setMoney(money+betting*(multiplyer-startMult));
      setLastMult(multiplyer);
      setBetStatus(2);
    }
  }

  useEffect(()=>{
    const incer = setInterval(()=>{
      if(status) {
        setMult(multiplyer*1.006);
      };
    }, 50);

    const timer = setTimeout(()=>{
      setLastMult(multiplyer);
      setStatus(0);
      setBetting(0);
      setBetStatus(3);
      setMult(0.3);
      setStartMult(0);

      setTimeout(()=>{
        setStatus(1);
        setBetStatus(0);
      }, 5000)


    }, Math.random()*1000*20);

    return () => {
      clearInterval(incer);
      clearTimeout(timer);
    }
  });
  
  function showBetButton() {
    if (betStatus === 0) {return <p>베팅</p>}
    if (betStatus === 1) {return <p>{parseFloat(betting*(multiplyer-startMult)).toFixed(0)-betting}</p>}
    if (betStatus === 2) {return <p>베팅</p>}
    if (betStatus === 3) {return <p>실패</p>}
  }

  function showMultText() {
    if (betStatus === 0) {return <h1 className='counter neonText'>{parseFloat(multiplyer).toFixed(2)}x</h1>}
    if (betStatus === 1) {return <h1 className='counter neonText'>{parseFloat(multiplyer).toFixed(2)}x</h1>}
    if (betStatus === 2) {return <h1 className='counter neonText'>{parseFloat(multiplyer).toFixed(2)}x</h1>}
    if (betStatus === 3) {return <h1 className='counter-fail redNeonText'>{parseFloat(lastMult).toFixed(2)}x</h1>}
  }
  
  return (
    <div className='wrapper'>
      <div className='topper'> 
        <Link href="/" className='siteLogo neonText'>두더지토토.com</Link>
        <h2 className='myMoney'>돈: {parseFloat(money).toFixed(0)} 원</h2>
      </div>

      <div className='maintab'>
        <span>
          <div className='chart-and-bet'>
            <span className='multiplyer'>{showMultText()}</span>
            <span className='bet'>
              <div>
                베팅<br />
                <input className='bet-amount' onChange={(e)=>{setTempBetting(e.target.value)}}></input> ₩
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
