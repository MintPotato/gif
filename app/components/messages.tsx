import Image from "next/image";
import { useEffect, useState } from "react";

export default function Messages({messageArray} : any) {

    const [elements, setElements] = useState<any[]>([]);
    let msg_date = new Date(Date.now());
    
    useEffect(() => {
        let temp: React.JSX.Element[] = [];  

        messageArray.forEach((element: string) => {
            if (!element.includes(".gif")) {
                temp.push(
                <div className="flex items-center gap-2 m-2 ml-[16px] z-[10]" key={messageArray.indexOf(element)}>
                    <div className="flex items-center">
                        <p className="text-sm text-black">{element}</p>
                    </div>
                    <p className="text-xs place-self-end text-gray-500">{msg_date.getHours().toString()+':'+msg_date.getMinutes().toString()}</p>
                </div>)
        } else {
                temp.push(
                <div className="flex items-center gap-2  m-2 ml-[16px] z-[10]" key={messageArray.indexOf(element)}>
                    <div className="flex items-center relative w-[352px] h-[220px]">
                        <Image className="object-fill overflow-hidden rounded-[6px]" fill src={element} alt="There should be gif" />
                    </div>
                    <p className="text-xs place-self-end text-gray-500">{msg_date.getHours().toString()+':'+msg_date.getMinutes().toString()}</p>
                </div>)}
    });
        setElements(temp);
    }, [messageArray]);

    

    return (
        elements
    );
};

