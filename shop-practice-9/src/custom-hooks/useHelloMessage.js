import { useEffect } from "react/cjs/react.development"

export default function useHelloMessage(nickname) {
    useEffect(() => {
        console.log(`YOO! ${nickname}!`)
    },[])
}

