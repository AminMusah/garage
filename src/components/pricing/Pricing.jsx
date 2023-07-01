import BankLineIcon from "remixicon-react/BankLineIcon";

function Pricing() {
  return (
    <div>
      <section className="price-section about bg" id="pricing">
        <h2 className="h2 section-title text-center">
          Pricing <span className="has-before"></span>
        </h2>
        <div className=" pricing">
          <section className="pricecol">
            <div className="icon">
              <BankLineIcon />
            </div>
            <h3>
              <span>Pro</span>
            </h3>
            <ul>
              <li>$40</li>
              <li>Duis leo sed fringilla</li>
              <li>Mauris sit amet nibh</li>
              <li>Donec sodales sagittis</li>
            </ul>

            <button className="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
          <section className="pricecol">
            <div className="icon">
              <BankLineIcon />
            </div>
            <h3>
              <span>Agency</span>
            </h3>
            <ul>
              <li>$90</li>
              <li>Duis leo sed fringilla</li>
              <li>Mauris sit amet nibh</li>
              <li>Donec sodales sagittis</li>
            </ul>

            <button className="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
          <section className="pricecol">
            <div className="icon">
              <BankLineIcon />
            </div>
            <h3>
              <span>Team</span>
            </h3>
            <ul>
              <li>$150</li>
              <li>Duis leo sed fringilla</li>
              <li>Mauris sit amet nibh</li>
              <li>Donec sodales sagittis</li>
            </ul>

            <button className="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
