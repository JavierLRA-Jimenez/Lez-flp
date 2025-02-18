import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GiPumpkinMask } from 'react-icons/gi';

const Icono = () => {
  return (
    <section className="flex flex-col items-center md:h-[17rem] h-40">
      <RouterLink to="/Fear">
        <div className="flex justify-center items-center mt-8">
          <GiPumpkinMask className="text-blue-700 w-24 h-24 md:w-48 md:h-48" />
        </div>
      </RouterLink>
      
    </section>
  );
};

export default Icono;
