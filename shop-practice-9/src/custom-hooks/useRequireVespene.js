import { useEffect } from "react";

export default function useRequireVespene() {
    useEffect(() => {
        console.log('Нужно больше веспена');
    }, [])
}