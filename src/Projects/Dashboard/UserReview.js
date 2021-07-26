import React from 'react';
import StarRating from './StarRating';
import { EMPTY_LINK, formatDate } from './utils';

const UserReview = ({ review }) => (
    <div className="row">
        <div className="col">
            <h6 className="m-b-15">Allina D’croze <span className="float-right f-13 text-muted">{ formatDate(review.data) }</span></h6>
            <StarRating rating={ review.avaliacao } />
            <p className="m-t-15 m-b-15 text-muted">{ review.comentario }</p>
            <a href={ EMPTY_LINK } className="m-r-30 text-muted">
                <i className="feather icon-thumbs-up m-r-15"/>Helpful?
            </a>
            <a href={ EMPTY_LINK }>
                <i className="feather icon-heart-on text-c-red m-r-15"/>
            </a>
            <a href={ EMPTY_LINK }><i className="feather icon-edit text-muted"/></a>
            <blockquote className="blockquote m-t-15 m-b-0">
                {
                    review.respostas.slice(0, 2).map(resposta => (
                        <div key={resposta.id}>
                            <h6>{ resposta.nome }</h6>
                            <p className="m-b-0 text-muted">{resposta.comentario}</p>
                        </div>
                    ))
                }
            </blockquote>
        </div>
    </div>
);

export default UserReview;