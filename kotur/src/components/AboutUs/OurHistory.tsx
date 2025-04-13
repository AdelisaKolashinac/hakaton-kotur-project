import React from "react";

const OurHistory: React.FC = () => {
  return (
    <div className="our-history">
      <div className="container py-3">
        <h2 className="text-center mb-4 py-3">
          Услужуваме клиенти повеќе од 10 години
        </h2>
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <img
              src="/ImgsAboutUs/image00015.jpg"
              className="img-fluid mb-3 py-3"
              alt="Dj playing music"
            />
            <p>
              "Котур" во Скопје, во срцето на урбаната џунгла, е место каде
              можеш да најдеш добра уметност, филмови, разговори - омилено место
              на многу локални љубители на уметноста!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/ImgsAboutUs/image00043.jpg"
              className="img-fluid mb-3 py-3"
              alt="party"
            />
            <h4>Низ годините</h4>
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h4>3000+</h4>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <p>Направени коктели</p>
              </div>
              <div className="py-3">
                <h4>5000+</h4>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <p>Направени кафиња</p>
              </div>
              <div className="py-3">
                <h4>80+</h4>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <p>Проекции</p>
              </div>
            </div>
            <div className="third-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
