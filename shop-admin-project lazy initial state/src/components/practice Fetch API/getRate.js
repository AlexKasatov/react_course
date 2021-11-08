function getRate() {

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(resolve => resolve.json())
    .then(data => {
        console.log(data.bpi.USD.rate);
    })

}

getRate()


function getRateNew() {

    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data);
        })
    
    }


    getRateNew()
