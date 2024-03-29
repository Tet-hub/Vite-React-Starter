const Card = () => {
  return (
    <section className="section-header">
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p className="flex align-center justify-start">
            Click the button to listen on Spotiwhy app.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
