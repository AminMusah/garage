import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import PriceTagLineIcon from "remixicon-react/PriceTagLineIcon";
import User2LineIcon from "remixicon-react/User2LineIcon";

function Products() {
  return (
    <div>
      <section className="section project" id="products">
        <h2 className="h2 section-title text-center">
          Our <span className="has-before">Products</span>
        </h2>
        <div className="arrival-content">
          <div className="arrival-card">
            <figure className="arrival-card-banner">
              <img
                src="/assets/images/castiron.webp"
                alt="Garage product"
                className="w-100"
              />
            </figure>

            <div className="arrivalcontent">
              <div className="arrivalcontent-top">
                <a href="#" className="card-meta-link">
                  <User2LineIcon size={10} />
                  <span>by: Admin</span>
                </a>

                <a href="#" className="card-meta-link">
                  <PriceTagLineIcon size={10} />
                  <span>New</span>
                </a>
              </div>
              <div className="card-product-info">
                <h3 className="h3 arrival-title">
                  <a href="#">Auto part</a>
                </h3>
                <h3 className="h3 arrival-title">
                  <a href="#">₵300</a>
                </h3>
              </div>

              <div className="arrivalcontent-bottom">
                <div className="publish-date">
                  <CalendarLineIcon size={10} />
                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <div className="add-to-cart-btn">Buy</div>
              </div>
            </div>
          </div>
          <div className="arrival-card">
            <figure className="arrival-card-banner">
              <img
                src="/assets/images/shock.jfif"
                alt="Garage product"
                className="w-100"
              />
            </figure>

            <div className="arrivalcontent">
              <div className="arrivalcontent-top">
                <a href="#" className="card-meta-link">
                  <User2LineIcon size={10} />
                  <span>by: Admin</span>
                </a>

                <a href="#" className="card-meta-link">
                  <PriceTagLineIcon size={10} />
                  <span>New</span>
                </a>
              </div>
              <div className="card-product-info">
                <h3 className="h3 arrival-title">
                  <a href="#">Auto part</a>
                </h3>
                <h3 className="h3 arrival-title">
                  <a href="#">₵500</a>
                </h3>
              </div>

              <div className="arrivalcontent-bottom">
                <div className="publish-date">
                  <CalendarLineIcon size={10} />
                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <div className="add-to-cart-btn">Buy</div>
              </div>
            </div>
          </div>
          <div className="arrival-card">
            <figure className="arrival-card-banner">
              <img
                src="/assets/images/sparkplug.jfif"
                alt="Garage product"
                className="w-100"
              />
            </figure>

            <div className="arrivalcontent">
              <div className="arrivalcontent-top">
                <a href="#" className="card-meta-link">
                  <User2LineIcon size={10} />
                  <span>by: Admin</span>
                </a>

                <a href="#" className="card-meta-link">
                  <PriceTagLineIcon size={10} />
                  <span>New</span>
                </a>
              </div>
              <div className="card-product-info">
                <h3 className="h3 arrival-title">
                  <a href="#">Spark plug</a>
                </h3>
                <h3 className="h3 arrival-title">
                  <a href="#">₵700</a>
                </h3>
              </div>

              <div className="arrivalcontent-bottom">
                <div className="publish-date">
                  <CalendarLineIcon size={10} />
                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <div className="add-to-cart-btn">Buy</div>
              </div>
            </div>
          </div>
          <div className="arrival-card">
            <figure className="arrival-card-banner">
              <img
                src="/assets/images/engine.jfif"
                alt="Garage product"
                className="w-100"
              />
            </figure>

            <div className="arrivalcontent">
              <div className="arrivalcontent-top">
                <a href="#" className="card-meta-link">
                  <User2LineIcon size={10} />
                  <span>by: Admin</span>
                </a>

                <a href="#" className="card-meta-link">
                  <PriceTagLineIcon size={10} />
                  <span>New</span>
                </a>
              </div>
              <div className="card-product-info">
                <h3 className="h3 arrival-title">
                  <a href="#">Engine</a>
                </h3>
                <h3 className="h3 arrival-title">
                  <a href="#">₵300</a>
                </h3>
              </div>

              <div className="arrivalcontent-bottom">
                <div className="publish-date">
                  <CalendarLineIcon size={10} />
                  <time dateTime="2022-27-04">Apr 27, 2022</time>
                </div>

                <div className="add-to-cart-btn">Buy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
