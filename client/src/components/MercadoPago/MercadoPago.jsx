import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);

const MercadoPago = ({ orderData }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  
  useEffect(() => {
    const getPreferenceId = async () => {
      try {
        const response = await axios.post("http://localhost:3001/mercadopago/create_preference", orderData);
        const id = response.data.preferenceId;
        setPreferenceId(id);
        console.log(preferenceId);
        return id;
      } catch (error) {
        alert(error);
      }
    };
    getPreferenceId();
  }, [orderData,preferenceId])

  return (
    <>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </>
  )
}

export default MercadoPago