var libaray = [
    {
        theAuthor: "― Oscar Wilde",
        theQuote: "“Be yourself; everyone else is already taken.”",
    },
    {
        theAuthor: "― Frank Zappa",
        theQuote: "“So many books, so little time.”",
    },
    {
        theAuthor: "― Albert Einstein",
        theQuote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
        theAuthor: "― Marcus Tullius Cicero",
        theQuote: "“A room without books is like a body without a soul.”",
    },
    {
        theAuthor: "― Mae West",
        theQuote: "“You only live once, but if you do it right, once is enough.”",
    },
    {
        theAuthor: "― Robert Frost",
        theQuote: "“In three words I can sum up everything I've learned about life: it goes on.”",
    },
    {
        theAuthor: "― Mark Twain",
        theQuote: "“If you tell the truth, you don't have to remember anything.”",
    },
    {
        theAuthor: "― Maya Angelou",
        theQuote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    },
    {
        theAuthor: "― Oscar Wilde",
        theQuote: "“Always forgive your enemies; nothing annoys them so much.”",
    },
]

var author = document.getElementById("author");
var quote = document.getElementById("quote");

var counter;
function addQuote() {
    var newCounter = Math.floor(Math.random() * libaray.length);
    if (newCounter == counter) {
        addQuote();
    } else {
        counter = newCounter;
        author.innerHTML = libaray[counter].theAuthor;
        quote.innerHTML = libaray[counter].theQuote;
    };
};
