import React from 'react';
import { list, shortList } from '../data';
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);

  const prevSlide = () => {};

  const nextSlide = () => {};

  return (
    <section className="slider-container">
      {people.map((person, personIdx) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{ transform: `translateX(${100 * personIdx}%)` }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
