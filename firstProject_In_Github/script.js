var arrayOfQuotes = [
    {
        'author': `Oscar Wilde`,
        'Quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': `Marilyn Monroe`,
        'Quote': `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`
    },

    {
        'author': `Albert Einstein`,
        'Quote': `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe`
    },
    {
        'author': ` Frank Zappa `,
        'Quote': `So many books, so little time.`
    },
    {
        'author': ` Marcus Tullius Cicero`,
        'Quote': `A room without books is like a body without a soul.`
    },
    {
        'author': ` Bernard M. Baruch`,
        'Quote': `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`
    },


]
// for (var i=0;i<arrayOfQuotes.length;i++)
// {
// console.log(arrayOfQuotes[i]);
// }



function randomQuote()
{
var rand=Number.parseInt(Math.random()*arrayOfQuotes.length);
document.getElementById("Quote").innerHTML=`\"${arrayOfQuotes[rand].Quote}\"`;
document.getElementById("QAuthor").innerHTML=`--${arrayOfQuotes[rand].author}`;
}