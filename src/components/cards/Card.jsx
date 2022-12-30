const Card = ({ card }) => {
  return (
    <section className="card">
      <header className="card-header">
        <div className="card-bank-name">{card.bank}</div>
        <img
          src="https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg"
          className="logo"
          alt="logo"
          width={90}
        />
      </header>
      <div className="card-content">
        <h3>{card.number}</h3>
        <div className="card-validity">
          <div>
            <label>Valid from</label>
            <div>{card.validFrom}</div>
          </div>
          <div>
            <label>Expire on</label>
            <div>{card.validTo}</div>
          </div>

          <div>
            <label>cvv</label>
            <div>{card.cvv}</div>
          </div>
        </div>

        <div className="card-person-name">{card.name}</div>
      </div>
    </section>
  );
};

export default Card;
