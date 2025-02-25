import React, { Suspense, useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Home from "../pages/User/Home";
import Landing from "../pages/Landing";
import LoginUser from "../pages/LoginUser";
import Register from "../pages/Register";
import RegisterUser from "../pages/RegisterUser";
import RegisterDriver from "../pages/RegisterDriver";
import LoginDriver from "../pages/LoginDriver";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../actions/auth";
import NewShipment from "../pages/User/NewShipment";
import MyShipments from "../pages/User/MyShipments";
import ViewOffer from "../pages/User/ViewOffer";
import Shipment from "../pages/User/Shipment";
import HomeDriver from "../pages/Driver/HomeDriver";
import ShipmentsInProgress from "../pages/User/ShipmentsInProgress";
import ShipmentsFinish from "../pages/User/ShipmentsFinish";

import MyOffersDriver from "../pages/Driver/MyOffersDriver";
import MyOffersDeliveredDriver from "../pages/Driver/MyOffersDeliveredDriver";
import MyShipmentsDriver from "../pages/Driver/MyShipmentsDriver";
import SearchShipments from "../pages/Driver/SearchShipments";

import ShipmentDriver from "../pages/Driver/ShipmentDriver";
import ViewMyShipmentDriver from "../pages/Driver/ViewMyShipmentDriver";
import Page404 from "../pages/Page404";
import PageMsg from "../pages/PageMsg";
import PageMsgUser from "../pages/User/PageMsgUser";
import PageMsgDriver from "../pages/Driver/PageMsgDriver";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("jwt");

    if (token !== null) {
      // try {
      dispatch(getUser(token));

      // } catch (error) {
      //   console.log("pasaron cosas");
      // }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/login/driver" element={<LoginDriver />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register/user" element={<RegisterUser />} />
          <Route exact path="/register/driver" element={<RegisterDriver />} />
          <Route exact path="/notification/:type" element={<PageMsg />} />
          {/* User */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/newshipment" element={<NewShipment />} />
          <Route exact path="/myshipments" element={<MyShipments />} />
          <Route exact path="/shipment/:idShipment" element={<Shipment />} />
          <Route exact path="/inprogress" element={<ShipmentsInProgress />} />
          <Route exact path="/finish" element={<ShipmentsFinish />} />

          <Route
            exact
            path="/notification/user/:noti"
            element={<PageMsgUser />}
          />
          <Route
            exact
            path="/offer/:idShipment/:idOffer"
            element={<ViewOffer />}
          />
          {/* Driver */}
          <Route exact path="/home/driver" element={<HomeDriver />} />
          <Route exact path="/shipments/driver" element={<SearchShipments />} />
          <Route
            exact
            path="/shipment/driver/:idShipment"
            element={<ShipmentDriver />}
          />
          <Route
            exact
            path="/myshipments/driver"
            element={<MyShipmentsDriver />}
          />
          <Route exact path="/offer/driver" element={<MyOffersDriver />} />
          <Route
            exact
            path="/offer/delivered/driver"
            element={<MyOffersDeliveredDriver />}
          />

          <Route
            exact
            path="/myshipment/driver/:idShipment"
            element={<ViewMyShipmentDriver />}
          />
          <Route
            exact
            path="/notification/driver/:noti"
            element={<PageMsgDriver />}
          />
          {/* 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      {/* <footer>
        <Fotter />
      </footer> */}
    </div>
  );
};

export default AppRouter;
