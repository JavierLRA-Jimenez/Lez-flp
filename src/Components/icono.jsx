import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GiPumpkinMask } from 'react-icons/gi';

const icono = () => {
  return (
    <section className="flex justify-center items-center h-[18rem]">
      <RouterLink to="/Fear">
        <div className="flex justify-center items-center">
          <GiPumpkinMask className="text-red-700 w-24 h-24 md:w-52 md:h-52" />
        </div>
      </RouterLink>
    </section>
  );
};

export default icono;