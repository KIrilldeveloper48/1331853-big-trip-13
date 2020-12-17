import AbstractView from "./abstract.js";

// Получаем итоговую цену для точки исходя из выбранных предложений
const getPointCost = (offersList, cost) => {
  if (offersList.length === 0) {
    return cost;
  }

  const pointCost = offersList.reduce((result, offer) => {
    if (offer.checked) {
      result += offer.cost;
    }
    return result;
  }, cost);

  return pointCost;
};

// Получаем итоговую цену путешествия
const getTripCost = (pointList) => {
  return pointList.reduce((result, point) => {
    result += getPointCost(point.currentOffers, point.cost);
    return result;
  }, 0);
};

const createTripCostTemplate = (serverData) => {
  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTripCost(serverData)}</span>
          </p>`;
};

class TripCost extends AbstractView {
  getTemplate() {
    return createTripCostTemplate(this._data);
  }
}

export default TripCost;
