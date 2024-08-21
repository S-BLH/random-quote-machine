import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    const quotes = [
      { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
      { text: 'Life is what happens when you are busy making other plans.', author: 'John Lennon' },
      { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
      { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
      { text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
      { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' }
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">{`"${quote}"`}</div>
      <div id="author" className="quote-author">{`- ${author}`}</div>
      <div id="button-container">
        <a
          id="tweet-quote"
          className="quote-button"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> Tweet
        </a>
        <button id="new-quote" className="quote-button" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
