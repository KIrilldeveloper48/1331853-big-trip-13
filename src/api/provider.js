import PointsModel from "../model/points";
import {isOnline} from "../utils/common";


const getSyncedPoints = (items) => {
  return items.filter(({success}) => success)
  .map(({payload}) => payload.point);
};

const createStoreStructure = (items) => {
  return items.reduce((result, current) => {
    return Object.assign({}, result, {
      [current.id]: current,
    });
  }, {});
};

class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getPoints() {
    if (isOnline()) {
      return this._api.getPoints()
        .then((points) => {
          const items = createStoreStructure(points.map(PointsModel.adaptToServer));
          this._store.setItems(items);
          return points;
        });
    }
    const storePoints = Object.values(this._store.getItems());

    return Promise.resolve(storePoints.map(PointsModel.adaptToClient));
  }


  getOffers() {
    if (isOnline()) {
      return this._api.getOffers()
        .then((offers) => {
          this._store.setOffers(offers);
          return offers;
        });
    }
    const storeOffers = Object.entries(this._store.getOffers()).map(([type, offers]) => Object.assign({}, {offers, type}));
    return Promise.resolve(PointsModel.adaptOffersToClient(storeOffers));
  }

  getDestinations() {
    if (isOnline()) {
      return this._api.getDestinations()
        .then((dest) => {
          this._store.setDestinations(dest);
          return dest;
        });
    }
    return this._store.getDestinations();
  }

  updatePoint(point) {
    if (isOnline()) {
      return this._api.updatePoint(point)
        .then((updatedPoint) => {
          this._store.setItem(updatedPoint.id, PointsModel.adaptToServer(updatedPoint));
          return updatedPoint;
        });
    }

    this._store.setItem(point.id, PointsModel.adaptToServer(Object.assign({}, point)));

    return Promise.resolve(point);
  }

  addPoint(point) {
    if (isOnline()) {
      return this._api.addPoint(point)
        .then((newPoint) => {
          this._store.setItem(newPoint.id, PointsModel.adaptToServer(newPoint));
          return newPoint;
        });
    }

    return Promise.reject(new Error(`Add point failed`));
  }

  deletePoint(point) {
    if (isOnline()) {
      return this._api.deletePoint(point)
      .then(() => this._store.removeItem(point.id));
    }

    return Promise.reject(new Error(`Delete point failed`));
  }

  sync() {
    if (isOnline()) {
      const storePoints = Object.values(this._store.getItems());
      return this._api.sync(storePoints)
        .then((response) => {
          const createdPoints = getSyncedPoints(response.created);
          const updatedPoints = getSyncedPoints(response.updated);
          const items = createStoreStructure([...createdPoints, ...updatedPoints]);

          this._store.setItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }
}

export default Provider;
