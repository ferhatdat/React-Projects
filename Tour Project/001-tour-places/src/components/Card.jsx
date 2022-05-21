function Card({veri}) {
  return (
    <div className="container">
      <div className="row">
      {veri.map((item) => {
        const {title, image, desc} = item
        return (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card m-2 bg-dark rounded-3 p-3 text-light myCSS ">
            <h5 className="card-title mt-3 ms-2 mb-3 fs-2 fw-bolder">
              {title}
            </h5>
            <img src={image} className="card-img-top size" alt={title} />
            <p className="card-text mt-3 display desc">{desc}</p>
          </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}

export default Card;
