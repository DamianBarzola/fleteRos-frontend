import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { confirmEmailUser } from "../actions/auth";

const PageMsg = () => {
  const { token } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(confirmEmailUser(token));
  }, [dispatch, token]);


    return (
      <div>
        <section className={styles.card404}>
          <div className={styles.form}>
            <h1>Notificación</h1>
            <span>Usuario confirmado correctamente.</span>
            <div className="mt-4">
              <Link to="/login" className={styles.btnLink}>
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  
};

export default PageMsg;
