const Detail = ({description, website, logoBackground, position, company, location, contract, postedAt, logo, requirements, role}) => {
  return (
    <>
      <div className="detail">
        <div className="detail-header">
          <div
            className="detail-header-logo"
            style={{
              backgroundColor: logoBackground,
            }}
          >
            <img src={logo} alt={company + '-logo'} />
          </div>
          <div
            className="card-logo"
            style={{
              backgroundColor: logoBackground,
            }}
          >
            <img src={logo} alt={company + '-logo'} />
          </div>
          <div className="detail-header-info">
            <h3 className="card-text-primary">{company}</h3>
            <p className="card-text-secondary">{company.toLowerCase()}.com</p>
          </div>
          <a href={website} className="detail-button" target="_blank" rel="noreferrer">
            Company Site
          </a>
        </div>
        <div className="detail-body">
          <div className="detail-body-info">
            <div className="detail-body-info-text">
              <p className="card-text-secondary">
                {postedAt} &bull; {contract}
              </p>
              <h3 className="card-text-primary">{position}</h3>
              <h4 className="card-text-tertiary">{location}</h4>
            </div>
            <button>Apply Now</button>
          </div>
          <p className="detail-body-paragraph">{description}</p>
          <h3 className="detail-body-heading">Requirements</h3>
          <p className="detail-body-paragraph">{requirements.content}</p>
          <ul className="detail-body-ul">
            {requirements.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <h3 className="detail-body-heading">What You Will Do</h3>
          <p className="detail-body-paragraph">{role.content}</p>
          <ol className="detail-body-ol">
            {role.items.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="detail-footer">
        <div className="detail-footer-info">
          <h3 className="card-text-primary">{position}</h3>
          <p className="card-text-secondary">{company.toLowerCase()}.com</p>
        </div>
        <button href={website} target="_blank" rel="noreferrer">
          Apply Now
        </button>
      </div>
    </>
  );
};
export default Detail;
