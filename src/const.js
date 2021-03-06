export const HiddenHeaderList = {
  FILTERS: `Filter events`,
  MENU: `Switch trip view`,
  SORT: `Trip events`
};

export const Keys = {
  ESC: `Esc`,
  ESCAPE: `Escape`
};

const PointType = {
  TAXI: `taxi`,
  BUS: `bus`,
  TRAIN: `train`,
  SHIP: `ship`,
  TRANSPORT: `transport`,
  DRIVE: `drive`,
  FLIGHT: `flight`,
  CHECK_IN: `check-in`,
  SIGHTSEEING: `sightseeing`,
  RESTAURANT: `restaurant`
};

export const pointTypeResource = {
  [PointType.TAXI]: `Taxi`,
  [PointType.BUS]: `Bus`,
  [PointType.TRAIN]: `Train`,
  [PointType.SHIP]: `Ship`,
  [PointType.TRANSPORT]: `Transport`,
  [PointType.DRIVE]: `Drive`,
  [PointType.FLIGHT]: `Flight`,
  [PointType.CHECK_IN]: `Check-in`,
  [PointType.SIGHTSEEING]: `Sightseeing`,
  [PointType.RESTAURANT]: `Restaurant`,
};

export const TYPE_LIST = [PointType.TAXI, PointType.BUS, PointType.TRAIN, PointType.SHIP, PointType.TRANSPORT, PointType.DRIVE, PointType.FLIGHT, PointType.CHECK_IN, PointType.SIGHTSEEING, PointType.RESTAURANT];

export const MAX_CITY_VISIBLE = 3;

export const ErrorsMessage = {
  CITY: `The city you specified is not available. Please select a city from the list.`,
  COST: `Cost cannot be negative`
};

export const SortListDisable = {
  EVENT: `Event`,
  OFFERS: `Offers`
};

export const SortType = {
  DEFAULT: `day`,
  TIME: `time`,
  PRICE: `price`
};

export const SORT_LIST = [`Day`, `Event`, `Time`, `Price`, `Offers`];

export const UserAction = {
  UPDATE_POINT: `UPDATE_POINT`,
  ADD_POINT: `ADD_POINT`,
  DELETE_POINT: `DELETE_POINT`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

export const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

export const MenuItem = {
  TABLE: `Table`,
  STATS: `Stats`,
  ADD_NEW_POINT: `add-new-point`
};

export const CHART_DATA_TYPE = {
  MONEY: `MONEY`,
  TYPE: `TYPE`,
  TIME_SPEND: `TIME-SPEND`
};

export const ChartSymbols = {
  MONEY: `€ `,
  TYPE: `x`,
  TIME_SPEND: `D`
};

export const ChartBarProperties = {
  BAR_TYPE: `horizontalBar`,
  BAR_BG: `#ffffff`,
  BAR_HOVER_BG: `#ffffff`,
  BAR_ANCHOR: `start`,
  BAR_THICKNESS: 44,
  BAR_HEIGHT: 55,
  BAR_LENGTH_MIN: 50
};

export const ChartLabelProperties = {
  LABEL_SIZE: 13,
  LABEL_COLOR: `#000000`,
  LABEL_ANCHOR: `end`,
  LABEL_ALIGN: `start`
};

export const ChartTitleProperties = {
  TITLE_COLOR: `#000000`,
  TITLE_SIZE: 23,
  TITLE_POSITION: `left`
};

export const ChartStatTypeProperties = {
  TYPE_COLOR: `#000000`,
  TYPE_SIZE: 13,
  TYPE_PADDING: 5
};

export const DateFormats = {
  FULL: `YYYY-M-DD`,
  FULL_TIME: `DD/MM/YY HH:mm`,
  TIME: `HH:mm`,
  MOUNTH: `M`,
  DAY: `D`,
  DAY_MOUNTH: `D MMM`,
  MOUNTH_DAY: `MMM D`,
};

const MLSECOND_PER_SECOND = 1000;
const SECOND_PER_MINUTE = 60;
export const MLSECONDS_PER_MINUTE = MLSECOND_PER_SECOND * SECOND_PER_MINUTE;
export const MINUTES_PER_DAY = 1440;
export const MINUTES_PER_HOUR = 60;

