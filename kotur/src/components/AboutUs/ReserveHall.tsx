import React from "react";

const ReserveHall: React.FC = () => {
  return (
    <div className="reserve-hall" id="iznajmi-prostor">
      <div className="container text-center py-5">
        <h2 className="py-3">Изнајмување на сала</h2>
        <p className="py-3 w-75 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem
          natus , laboriosam cum ab eum itaque rerum repudiandae. Sapiente nobis
          itaque placeat? Lorem ipsum consectetur adipisicing elit. Est autem
          natus deleniti iusto qui, laboriosam cum ab eum itaque rerum
          repudiandae. Sapiente nobis itaque placeat?
        </p>
        <img src="/ImgsAboutUs/sala.jpg" className="img-fluid" alt="Hall" />
      </div>
    </div>
  );
};

export default ReserveHall;
