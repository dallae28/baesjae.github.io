const quotes = [
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    author: "George Santayana",
  },
  {
    quote: "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Coelho",
  },
  {
    quote: "Nothing is a waste of time if you use the experience wisely.",
    author: "August Rodin",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "The only thing worse than starting something and failing...is not starting something.",
    author: "Seth Godin",
  },
  {
    quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you're not doing a tour of gas stations.",
    author: "Tim O'Reilly",
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote: "Life is a tragedy when seen in close-up, but a comedy in long shot.",
    author: "Charile Chaplin",
  },
  {
    quote: "To create more positive results in your life, replace 'if only'  with 'next time'.",
    author: "Unknown",
  },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
