import React, { useState } from 'react';
import './Report.css';
import Footer from '../../Footer/Footer';
import { cards } from '../../data/cards';

const Report = () => {
  const [filter, setFilter] = useState('All'); // Default filter

  // Filtered cards
  const filteredCards = filter === 'All'
    ? cards
    : cards.filter(card => card.category === filter);

  return (
    <div className='Report'>
      <div className='Report-page'>
        <h1>Reports & Publications</h1>
        <p className='pera'>Fact-finding, investigations, and research reports by CPDR-TN</p>

        <div className='btn-group'>
          {['All', 'Human Rights', 'Fact-Finding', 'Kashmir', 'Democracy'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='Card-group'>
          {filteredCards.map(item => (
            <div className='card-Box' key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className='date-topic'>
                <div className='date'>
                  <i className="fa-regular fa-calendar"></i> {item.date}
                </div>
                <span>{item.category}</span>
              </div>
              <a href={item.pdf} target="_blank" rel="noreferrer" className='pdf-btn'>
                Open PDF
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Report;
