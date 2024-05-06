
import { useEffect, useState } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import { InitSpin } from "./initial-spin/initial-spin";

export const Relate = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 4500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.os_webkit_moz_ms_fox'));

    return(<>
        <main>
            {
                d ?
                    <InitSpin />
                :
                    swap
            }
        </main>
    </>)
};