"use client";

import React, { useState, useEffect } from 'react';
import Messages from './components/messages';
import Inputer from './components/inputer';
import Giffer from './components/giffer';


export default function Home() {
  const [input, setInput] = useState<string>("");
  const [messageArray, setMessageArray] = useState<any[]>([]);
  const [giffer_state, setGifferState] = useState(false);

  useEffect(() => {
    let idx = input.indexOf("/gif")

    if (input.includes("/gif")) {
      if (idx == 0) {
        setGifferState(true)
      } else {
        setGifferState(false)
      }
    } else {
      setGifferState(false)
    }

  }, [input])

  return (
    <main>
      <div className='w-[437px] h-[340px] bg-[#FFFFFF] rounded-[4px] place-self-center relative flex flex-col place-content-end  translate-y-[20px] overflow-hidden'>
        {giffer_state && <Giffer messageArray={messageArray} setMessageArray={setMessageArray} input={input} setInput={setInput} />}
        <Messages messageArray={messageArray} />
        <Inputer input={input} setInput={setInput} messages={messageArray} setMessages={setMessageArray} giffer_state={giffer_state}/>
      </div>
    </main>
  );

}