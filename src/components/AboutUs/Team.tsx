import React from "react";

const Team: React.FC = () => {
  return (
    <section
      className="team-section py-5 d-flex align-items-center"
      id="become-team"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/ImgsAboutUs/Koturvrabotuva1.jpg"
              alt="Join Our Team"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6  text-center text-md-start px-5">
            <h1>Стани дел од тимот</h1>
            <h2 className="mt-3">Работи во Котур</h2>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, explicabo corporis unde deserunt voluptate inventore
              fugit mollitia odio sapiente delectus veritatis! Voluptatum
              cupiditate quibusdam assumenda harum quam laboriosam, asperiores
              autem?{" "}
            </p>
            <a href="#apply-job" className="btn btn-apply">
              Аплицирај веднаш
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
