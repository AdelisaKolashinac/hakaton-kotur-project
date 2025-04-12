import React from "react";

const ApplyJob: React.FC = () => {
  return (
    <section className="apply-job-section py-5" id="apply-job">
      <div className="container text-white">
        <h4 className="mb-2 text-center">Котур вработува</h4>
        <h1 className="mb-4 text-center">Апликација за Работа</h1>
        <form className="apply-form">
          <div className="row">
            <div className="col-md-6 mb-3">
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
            <div className="col-md-6 mb-3">
              <label htmlFor="position" className="form-label">
                Позиција
              </label>
              <select id="position" className="form-control">
                <option value="">Избери позиција</option>
                <option value="bartender">Шанкер</option>
                <option value="waiter">Келнер</option>
                <option value="chef">Готвач</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="number" className="form-label">
                Телефонски број
              </label>
              <input
                type="tel"
                id="number"
                className="form-control"
                placeholder="075 555 555"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cv" className="form-label">
                Прикачи CV
              </label>
              <input type="file" id="cv" className="form-control" />
            </div>

            <div className="col-md-12 mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="petko.petkovski@gmail.com"
              />
            </div>

            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-light px-5 mt-3">
                Испрати
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyJob;
