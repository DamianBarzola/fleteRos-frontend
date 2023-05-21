import axios from "axios";
import { types, url } from "../types/types";

export const createOffer = (priceOffer, idShipment) => {
  let token = localStorage.getItem("jwt");
  let data = {
    offer: {
      price: parseInt(priceOffer),
    },
    id: idShipment,
  };
  return async (dispatch) => {
    await axios
      .post(url + "/offer/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Offer Creada");
        dispatch(offerCreated(true));
      })
      .catch((response) => {});
  };
};

export const rateOffer = (rateOffer, idOffer) => {
  let token = localStorage.getItem("jwt");
  let data = {
    rate: parseInt(rateOffer),
    id: idOffer,
  };
  return async (dispatch) => {
    await axios
      .put(url + "/offer/rate", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Agregaste una valoracion al transportista");
        window.location.reload();
      })
      .catch((response) => {
        alert("Ha ocurrido un error");
        console.log(response)
      });
  };
};

export const readOffer = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/driver/offers/sent", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readOffers(data));
      })
      .catch((response) => {});
  };
};

export const offerAccepted = (data) => {
  return {
    type: types.offerAccepted,
    payload: data,
  };
};

export const offerCreated = (data) => {
  return {
    type: types.offerCreated,
    payload: data,
  };
};
export const create = (data) => {
  return {
    type: types.shipmentAdd,
    payload: data,
  };
};
export const newshipmentSuccess = (state) => {
  return (dispatch) => {
    dispatch({ type: types.newshipmentSuccess, payload: state });
  };
};
export const readOffers = (data) => {
  return {
    type: types.offerRead,
    payload: data,
  };
};

export const deleteShipment = (id) => {
  return {
    type: types.deleteShipment,
    payload: id,
  };
};

export const updateShipment = (data) => {
  return {
    type: types.shipmentModify,
    payload: data,
  };
};

export const clearShipmentData = () => {
  return {
    type: types.clearShipmentData,
  };
};
