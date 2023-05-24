import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import stylesOffer from "../../styles/Offer.module.css";
import stylesRequest from "../../styles/Request.module.css";

import { readOffer } from "../../actions/offer";
import { Link } from "react-router-dom";
import { transformDateFormat } from "../../utils/validations";
import { BsArrowRight } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { RiPinDistanceLine } from "react-icons/ri";
import { formatDateSeconds, formatDistance } from "../../utils/utils";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineLocalOffer } from "react-icons/md";

const MyOffersDriver = () => {
  document.title = "Fleteros - Mis Ofertas";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readOffer());
  }, [dispatch]);
  const offers = useSelector((state) => state.offer.data);
  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
        <div className="col-12 d-flex justify-content-center ps-0">
          <div className={stylesOffer.cardForm}>
            <div className="d-flex align-items-center ms-1">
              <FaClipboardList size="2rem" />
              <h1 className="m-0 ms-2">Ofertas Realizadas</h1>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                {Object.keys(offers).length !== 0 ? (
                  <div>
                    {offers.map((element) => {
                      return (
                        !element.confirmed && (
                          <div
                            className={stylesOffer.cardElement}
                            key={element.id}
                          >

                            <div className="row p-2 text-start">
                              <h5>
                                <b>
                                  {" "}
                                  Solicitud de Transporte Nº:{" "}
                                  {element.shipment.id}{" "}
                                </b>
                              </h5>
                              
                              <div className=" my-2">
                                <BiCurrentLocation size={"18px"} />{" "}
                                <b> {element.shipment.locationFrom}</b>{" "}
                                <BsArrowRight className={stylesRequest.arrowIcon} />{" "}
                                <GrLocationPin size={"18px"} />{" "}
                                <b> {element.shipment.locationTo}</b>
                              </div>
                              <div className="row my-2">
                                <div className="col-6">
                                  <AiOutlineCalendar size={"18px"} />{" "}
                                  <b>Fecha:</b>{" "}
                                  {transformDateFormat(
                                    element.shipment.shipDate
                                  )}
                                </div>
                                <div className="col-6">
                                  <AiOutlineClockCircle size={"18px"} />{" "}
                                  <b>Horario:</b>{" "}
                                  {element.shipment.delivery_shift == "M"
                                    ? "Mañana"
                                    : "Tarde"}
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="row p-2 text-start  ">
                              {" "}
                              <h5 className="text-start">
                                <b>Mi Oferta:</b>{" "}
                              </h5>
                              <div className="row">
                                <div className="col-6 ">
                                  <div className="mb-2">
                                    <MdOutlineLocalOffer size={"18px"} />{" "}
                                    <b> Precio:</b> {element.price}
                                  </div>
                                </div>
                                <div className="col-6   ">
                                  <div>
                                    <b>Realizada el :</b>{" "}
                                    {element.registrationDate &&
                                      transformDateFormat(
                                        element.registrationDate
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                ) : (
                  <div className="my-4 d-flex justify-content-center">
                    <h4>Actualmente no tienes ofertas realizadas.</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOffersDriver;
