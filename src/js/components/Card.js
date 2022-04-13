const Card = ({id, logoBackground, position, company, location, contract, postedAt, logo, handleClick}) => {
  return (
    <>
      <div className="card">
        <div
          className="card-logo"
          style={{
            backgroundColor: logoBackground,
          }}
        >
          <img src={logo} alt={company + '-logo'} />
        </div>
        <p className="card-text-secondary">
          {postedAt} &bull; {contract}
        </p>
        <h3 className="card-text-primary" onClick={() => handleClick(id)}>
          {position}
        </h3>
        <p className="card-text-secondary">{company}</p>
        <h4 className="card-text-tertiary">{location}</h4>
      </div>
    </>
  );
};
export default Card;
