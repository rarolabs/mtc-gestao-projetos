import React from 'react';
import { EMPTY_LINK } from './utils';

const StarRating = ({ rating, max = 5 }) => {
  return (
      <>
          {
              Array.from(Array(max).keys()).map((_, index) => (
                  <a key={index} href={EMPTY_LINK}>
                      {
                          index < rating ?
                              <i className="feather icon-star-on f-18 text-c-yellow"/> :
                              <i className="feather icon-star f-18 text-muted"/>
                      }
                  </a>
              ))
          }
      </>
  );
};

export default StarRating;