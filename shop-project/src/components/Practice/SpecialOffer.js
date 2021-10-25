import React, {useEffect, useState} from "react"

export default function SpecialOffer() {
  const [items, setItems] = useState(0)
  const [free, setFree] = useState(0)

  useEffect(() => {
    console.log("монтаж завершен")
    return () => {
      console.log("начался демонтаж")
    }
  }, [])

  useEffect(() => {
    console.log("апдейт items")
  }, [items])

  useEffect(() => {
    console.log("апдейт free")
  }, [free])

  useEffect(() => {
    console.log("апдейт items или free")
  }, [items, free])

  function handleQuantityClick() {
    if (items > 0 && !(items % 3)) {
      setItems(items + 1)
      setFree(free + 1)
    } else {
      setItems (items + 1)
    }
  }

  return <>
    <h2>Товаров: {items}</h2>
    <button onClick={handleQuantityClick}>Еще один</button>
    <h3>Подарков: {free}</h3>
  </>
}