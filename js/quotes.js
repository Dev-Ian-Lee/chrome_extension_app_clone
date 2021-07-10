const quotes = [
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    author: "George Santayana",
  },

  {
    quote:
      "One can survive everything, nowadays, except death, and live down everything except a good reputation.",
    author: "Oscar Wilde",
  },

  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },

  {
    quote: "To want to be what one can be is purpose in life.",
    author: "Cynthia Ozick",
  },

  {
    quote: "Prosperity makes friends, adversity tries them.",
    author: "Publilius Syrus",
  },

  {
    quote:
      "There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.",
    author: "Hippocrates",
  },

  {
    quote: "We make a living by what we get, we make a life by what we give.",
    author: "Sir Winston Churchill",
  },

  {
    quote:
      "If we take care of the moments, the years will take care of themselves.",
    author: "Maria Edgeworth",
  },

  {
    quote: "A man's silence is wonderful to listen to.",
    author: "Thomas Hardy",
  },

  {
    quote: "The gods visit the sins of the fathers upon the children.",
    author: "Euripides",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
