"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { getTrendingGif, getGif } from '@/app/lib/gif_getter';
import { Gif } from '@/app/lib/gif_getter'

export default function Giffer({ messageArray, setMessageArray, input, setInput }) {
  const [gifUrl, setGifUrl] = useState<any[]>([]);

  useEffect(() => {
    setGifUrl([])

    let gifs = [];
    let response: Gif[] = []
    const fetchGif = async () => {
      if (input.trim() == "/gif") {
        response = await getTrendingGif();
        console.log(1);
      } else if (input.includes("/gif")) {
        console.log(2);
        response = await getGif(input.slice(4))
        
      }

      if (response) {
        for (let i = 0; i < response.length - 3; i = i + 3) {
          gifs.push(
            <div key={i} className="flex gap-[10px] w-[378px] h-[118px]">
              <div onClick={() => { setMessageArray((prevMessageArray) => [...prevMessageArray, response[i].images.fixed_height.url]); setInput('') }} className={"flex-auto relative h-full"} style={{ width: `${Math.floor(Number(response[i].images.fixed_height.width) * 118 / Number(response[i].images.fixed_height.height))}px` }}>
                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[i].alt_text} src={response[i].images.fixed_height.url}></Image>
              </div>
              <div onClick={() => { setMessageArray((prevMessageArray) => [...prevMessageArray, response[i + 1].images.fixed_height.url]); setInput('') }} className={"flex-auto relative h-full"} style={{ width: `${Math.floor(Number(response[i + 1].images.fixed_height.width) * 118 / Number(response[i + 1].images.fixed_height.height))}px` }}>
                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[i + 1].alt_text} src={response[i + 1].images.fixed_height.url}></Image>
              </div>
              <div onClick={() => { setMessageArray((prevMessageArray) => [...prevMessageArray, response[i + 2].images.fixed_height.url]); setInput('') }} className={"flex-auto relative h-full"} style={{ width: `${Math.floor(Number(response[i + 2].images.fixed_height.width) * 118 / Number(response[i + 2].images.fixed_height.height))}px` }}>
                <Image fill className="z-50 overflow-hidden rounded-[2px] hover:shadow-lg" alt={response[i + 2].alt_text} src={response[i + 2].images.fixed_height.url}></Image>
              </div>
            </div>
          )
        }
      }
      setGifUrl(gifs);
    }
    fetchGif();
  }, [input]);

  return (
    <div className='z-[50] absolute bg-white  top-[22px] w-[404px] h-[248px] pl-[10px] pt-[10px]  rounded-[1px] border-[#D3D9DE] border-[1px] translate-x-[16px] translate-y-[-8px]'>
      <div className='w-[388px] h-full grid grid-flow-row gap-[10px] overflow-y-auto overflow-hidden'>
        {gifUrl}
      </div>
    </div>
  );
}