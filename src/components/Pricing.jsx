import BankLineIcon from "remixicon-react/BankLineIcon";

function Pricing() {
  return (
    <div>
      <section className="price-section about bg">
        <h2 className="h2 section-title text-center">
          Pricing <span className="has-before"></span>
        </h2>
        <div className=" pricing">
          <section class="pricecol">
            <div class="icon">
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

            <button class="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
          <section class="pricecol">
            <div class="icon">
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

            <button class="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
          <section class="pricecol">
            <div class="icon">
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

            <button class="btn btn-primary price-btn">
              <span>Learn more</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
