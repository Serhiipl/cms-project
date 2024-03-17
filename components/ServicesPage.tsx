"use client";

import React, { useState, useEffect } from "react";

interface IService {
  nameOfService: string;
  description: string;
  price: string;
}

interface IServiceState {
  data: IService[];
  isLoading: boolean;
  error: Error | string | null;
}

const Services: React.FC = () => {
  const [state, setState] = useState<IServiceState>({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const getServices = async (): Promise<void> => {
      try {
        const response = await fetch("serwices.json");
        const data = (await response.json()) as IService[];
        setState((prevstate) => ({ ...prevstate, data, isLoading: false }));
      } catch (error: any) {
        console.log("Error fetching serwices", error);
        setState((prevState) => ({
          ...prevState,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    getServices();
  }, []);

  if (state.isLoading) {
    return <p> Services is loading...</p>;
  }
  if (state.error) {
    return <p>Помилка: {String(state.error)}</p>;
  }

  return (
    <div className="">
      {state.data.map((item, i) => (
        <div key={i} className="service_price_wrapper">
          <div className="name_of_service">
            <h4>{item.nameOfService}</h4>
          </div>
          <div className="description_of_cervice">
            <p>{item.description}</p>
          </div>
          <div className="price_of_cervice">
            <div className="price">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;
