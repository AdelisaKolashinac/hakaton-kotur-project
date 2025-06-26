import React from "react";

const CoctailCatering: React.FC = () => {
  return (
    <div className="container-fluid coctail-catering" id="koktel-ketering">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/ImgsAboutUs/barCoctail.jpg"
            className="img-fluid"
            alt="Catering"
          />
        </div>
        <div className="col-md-6 px-5">
          <h2 className="py-3">Коктел кетеринг</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            debitis! Rem ipsum doloremque, officia non distinctio odit quisquam
            sint nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae, debitis! Rem ipsum doloremque, officia non distinctio odit
            quisquam sint nemo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoctailCatering;
