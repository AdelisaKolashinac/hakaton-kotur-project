const MenuHeroSection = () => {
  return (
    <section className="menu-hero-section">
      <div className="menu-hero-section-text">
        <h1>Мени</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis
          provident eligendi! Velit voluptatum optio ipsum in ullam, modi id
          quod facilis expedita, consectetur natus nihil ratione deserunt, esse
          maxime consequatur harum impedit earum repellat.
        </p>
      </div>
      <div className="menu-hero-section-img">
        <div className="img-container">
          <img src="./menu/menu-hero-img1.png" alt="Cocktail Image" />
        </div>
        <div className="img-container two">
          <img src="./menu/menu-hero-img2.png" alt="Cocktail Image" />
          <div className="overlay"></div>
        </div>
        <div className="img-container">
          <img src="./menu/menu-hero-img3.png" alt="Cocktail Image" />
        </div>
      </div>
    </section>
  );
};
export default MenuHeroSection;
