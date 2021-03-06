import he from "he";

import AbstractView from "./abstract";

import {getFormatedDate} from "../utils/common";
import {DateFormats} from "../const";

const createOffersListTemplate = (offersList) => {
  if (offersList.length === 0) {
    return ``;
  }

  return offersList.reduce((result, offer) => {

    result += `<li class="event__offer">
                  <span class="event__offer-title">${offer.title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offer.price}</span>
                </li>`;

    return result;
  }, ``);
};

const {FULL: formateFull, TIME: formateTime, DAY_MOUNTH: formateDayMounth} = DateFormats;
export const createPointTemplate = ({currentType, currentCity, cost, currentOffers, startDate, endDate, duration, isFavorite}) => {
  const fullStartDate = getFormatedDate(startDate, formateFull);
  const timeStartDate = getFormatedDate(startDate, formateTime);
  const fullEndDate = getFormatedDate(endDate, formateFull);
  const timeEndDate = getFormatedDate(endDate, formateTime);
  const favorite = isFavorite ? `event__favorite-btn--active` : ``;
  const costInString = String(cost);

  return `<li class="trip-events__item">
          <div class="event">
            <time class="event__date" datetime="${fullStartDate}">${getFormatedDate(startDate, formateDayMounth)}</time>
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${currentType.toLowerCase()}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${currentType} ${he.encode(currentCity)}</h3>
            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${fullStartDate + `T` + timeStartDate}">${timeStartDate}</time>
                &mdash;
                <time class="event__end-time" datetime="${fullEndDate + `T` + timeEndDate}">${timeEndDate}</time>
              </p>
              <p class="event__duration">${duration}</p>
            </div>
            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${he.encode(costInString)}</span>
            </p>
            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              ${createOffersListTemplate(currentOffers)}
            </ul>
            <button class="event__favorite-btn ${favorite}" type="button">
              <span class="visually-hidden">Add to favorite</span>
              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
              </svg>
            </button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
          </li>`;
};

class Point extends AbstractView {
  constructor(data) {
    super(data);
    this._openClickHandler = this._openClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPointTemplate(this._data);
  }

  _openClickHandler() {
    this._callback.click();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }

  setOpenClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._openClickHandler);
  }
}

export default Point;
