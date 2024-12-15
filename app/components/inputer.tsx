"use client";

import React, { useState, useEffect } from "react";



export default function Inputer({ input, setInput, messages, setMessages, giffer_state }: any) { 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    };
      
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex w-full  h-[62px] px-[16px] py-[13px]  border-t-[#C4C4C4] border-[1px] relative">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите сообщение..."
                className="text-[17px] text-black w-full h-full rounded-[6px] border-[1px] border-[#C4C4C4] px-2 focus:outline-none focus-within:shadow-md focus-within:border-blue-500"
            />
            {giffer_state && <div className="absolute w-10 h-[28px] text-[#828282] place-content-center place-self-center translate-x-[-172px]">
                        <div id=" relative colored_gif_div"><span id="colored_gif">/gif</span></div>
                        <style>
                            {"#colored_gif {background: linear-gradient(135deg, #2EE6A8 0%, #3399FF 34.37%, #9933FF 69.27%, #FF3399 100%);\
                            -webkit-background-clip: text;-webkit-text-fill-color: transparent;}"}
                        </style>
                    </div>}
        </form>
    );
}