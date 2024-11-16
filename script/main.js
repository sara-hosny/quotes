var quote =[
   ' “Be yourself; everyone else is already taken ― Oscar Wilde',
   '“So many books, so little time.” ― Frank Zappa',
   '“You only live once, but if you do it right, once is enough.” ― Mae West',
   '“If you tell the truth, you dont have to remember anything.” ― Mark Twain',
   '“A friend is someone who knows all about you and still loves you.”'
]

function addQuote(){
    var randomNumber = Math.floor(Math.random() * quote.length);
    var store = quote[randomNumber];
    document.getElementById('quotes').innerHTML = store;    
}

