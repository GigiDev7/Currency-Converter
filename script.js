const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one') 
const amountEl_two = document.getElementById('amount-two')

const swap = document.getElementById('swap')
const rateEl = document.getElementById('rate')


// Fetch exchange rate and calculate
async function calculate(){
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value

    const result = await fetch(`https://v6.exchangerate-api.com/v6/aaee202f35a92355900b3c8a/latest/${currency_one}`)
    const data = await result.json()
    const rate = data.conversion_rates[currency_two]
    
    rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    
}


currencyEl_one.addEventListener('change', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp
    calculate()
})
