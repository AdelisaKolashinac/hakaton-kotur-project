import React from "react";

const FormHall: React.FC = () => {
  return (
    <div className="form-container py-5">
      <section className="form-reserve-section p-5 container">
        <div className="text-white">
          <h4 className="mb-2 text-center">Резервации</h4>
          <h1 className="mb-4 text-center">Резервирај Сала</h1>
          <form className="reserve-form">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="fullname" className="form-label">
                  Име и презиме
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="form-control"
                  placeholder="Петко Петковски"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="date" className="form-label">
                  Датум
                </label>
                <select id="date" className="form-control">
                  <option value="">Избери дата</option>
                  <option value="2025-04-15">April 15, 2025</option>
                  <option value="2025-04-16">April 16, 2025</option>
                  <option value="2025-04-17">April 17, 2025</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="hour" className="form-label">
                  Час
                </label>
                <select id="hour" className="form-control">
                  <option value="">Избери час</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="email" className="form-label">
                  Мејл Адреса
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="petko.petkovski@gmail.com"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="eventType" className="form-label">
                  Тип на настан
                </label>
                <input
                  type="text"
                  id="eventType"
                  className="form-control"
                  placeholder="Lorem ipsum"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="message" className="form-label">
                  Порака
                </label>
                <input
                  type="text"
                  id="message"
                  className="form-control"
                  placeholder="Lorem Ipsum"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-light px-5 mt-3">
                  Испрати
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormHall;
