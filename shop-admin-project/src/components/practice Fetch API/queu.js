const queue = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, time)
      
    })
  }
  
  queue(500).then(result => {
      console.log("Ожидание завершено")
  })

  queue(500).then(_ => {
    console.log("Ожидание завершено")
  })