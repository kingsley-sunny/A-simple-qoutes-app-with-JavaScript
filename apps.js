const quotes = [
    {
        name : "Stephen King",
        quote: 'get busy living or get busy dying.'
    },
    {
        name : 'john F.Kennedy',
        quote: 'those who dare to fail miserably can achieve greatly.'
    },
    {
        name: 'abraham lincoln',
        quote : " I'am a success today because i had a friend who believe in me and i didn't have the heart to let him down."
    },
    {
        name : 'leonardo da vinci',
        quote : 'it had been long since come to my attention that people of accomplishment rarely sat back and let things happen to them. they went out and happen to things.'
    },
    {
        name : 'leo tolstoy',
        quote : 'If you want to happy, be happy.'
    },
    {
        name : 'asari dokubo',
        quote : 'you want please others and displease yourself, Now them never leave , They have left you behind , even road to go you cannot,NO BE JUJU BE THAT'
    },
    {
        name: 'Boss EKC',
        quote : 'Dont serve God because of what you are expecting, Instead Love him and do his will'
    }
]

const btn = document.querySelector('button');
const qouteText = document.querySelector('div em');
const nameOfTheQouter = document.querySelector('p')

document.addEventListener('DOMContentLoaded', getQuote)
btn.addEventListener('click', getQuote)

let arr = []
function getQuote(e){
    
    randomQoute = quotes[Math.floor(Math.random()*quotes.length)]
    // console.log(randomQoute.name)
    if(arr[arr.length - 1] !== randomQoute){
        arr.push(randomQoute)
        qouteText.textContent = randomQoute.quote
        nameOfTheQouter.textContent = randomQoute.name
    } else {
        while(arr[arr.length - 1] === randomQoute){
            arr.pop()
            console.log('arr just poped')
            let another = quotes[Math.floor(Math.random()*quotes.length)]
            arr.push(another)
            qouteText.textContent = another.quote
            nameOfTheQouter.textContent = another.name
        }
    }
    console.log(arr)
    
} 

function getQuote(e){
    const randomQoutesInitiallyLoaded = quotes[Math.floor(Math.random()*quotes.length)]

    qouteText.textContent = randomQoutesInitiallyLoaded.quote;
    nameOfTheQouter.textContent = randomQoutesInitiallyLoaded.name
}

let d = new Date
console.log(d.getSeconds())


