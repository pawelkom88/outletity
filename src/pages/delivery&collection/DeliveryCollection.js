import "./DeliveryCollection.scss";

export default function DeliveryCollection() {
  return (
    <section className="container">
      <div className="delivery-collection">
        <header className="delivery-collection-header">
          <h4 className="delivery-collection-heading">Delivery and collection</h4>
        </header>
        <div className="delivery-collection-tabs">
          <ul className="delivery-collection-tab">
            <li className="delivery-collection-tab__delivery active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32.236"
                height="32"
                viewBox="0 0 32.236 32">
                <path d="M1.656 17.756L16 5.324l14.344 12.432a1.001 1.001 0 0 0 1.312-1.512l-15-13a1 1 0 0 0-1.31 0L10 7.876V6a2 2 0 0 0-4 0v5.342L.344 16.244a1.003 1.003 0 0 0-.1 1.412c.364.416.994.462 1.412.1zM12 22h8v10h6a2 2 0 0 0 2-2v-9.802c0-.6-.268-1.166-.732-1.546l-10-8.198a1.996 1.996 0 0 0-2.536 0l-10 8.198A1.993 1.993 0 0 0 4 20.198V30a2 2 0 0 0 2 2h6V22z" />
              </svg>
            </li>
            <li className="delivery-collection-tab__collection">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512">
                <path d="M472.3,221.3l-59.1-54.7A69.906,69.906,0,0,0,365.7,148H335.5v-6.1a50.018,50.018,0,0,0-50-50H67.2a50.018,50.018,0,0,0-50,50V365.8a10.029,10.029,0,0,0,10,10H58.4a53.141,53.141,0,0,0,104.8,0H349.4a53.141,53.141,0,0,0,104.8,0h30.5a10.029,10.029,0,0,0,10-10V272.7A69.617,69.617,0,0,0,472.3,221.3ZM458.7,236H399.5V181.2l.1.1ZM67.2,111.9H285.5a30.088,30.088,0,0,1,30,30V178h0v78.4h0v1.4H37.2V141.9A30.088,30.088,0,0,1,67.2,111.9Zm43.6,288.2A33.1,33.1,0,1,1,143.9,367,33.139,33.139,0,0,1,110.8,400.1Zm0-86.3a53.282,53.282,0,0,0-52,42H37.2v-78H315.5v78H162.8A53.2,53.2,0,0,0,110.8,313.8Zm291,86.3A33.1,33.1,0,1,1,434.9,367,33.139,33.139,0,0,1,401.8,400.1Zm73-44.3h-21a53.19,53.19,0,0,0-104,0H335.5V256.4h0V168h30.2a52.829,52.829,0,0,1,13.8,1.9V236a20.059,20.059,0,0,0,20,20h72.4a49.287,49.287,0,0,1,2.9,16.7Z" />
                <path d="M110.8 338.5a28.4 28.4 0 1 0 28.4 28.4A28.445 28.445 0 0 0 110.8 338.5zm0 36.9a8.4 8.4 0 1 1 8.4-8.4A8.451 8.451 0 0 1 110.8 375.4zM401.8 338.5a28.4 28.4 0 1 0 28.4 28.4A28.445 28.445 0 0 0 401.8 338.5zm0 36.9a8.4 8.4 0 1 1 8.4-8.4A8.451 8.451 0 0 1 401.8 375.4zM155.3 212.4a9.993 9.993 0 0 0 7.1 3h0a10.327 10.327 0 0 0 7.1-2.9l48.1-48.1a9.97 9.97 0 0 0-14.1-14.1l-41 41L142.6 171a9.97 9.97 0 1 0-14.2 14z" />
              </svg>
            </li>
          </ul>
          {/* hide react */}
          <div className="delivery-options">
            <div className="delivery-options__standard">
              <div className="delivery-options__standard__price">
                <h5>Standard Delivery</h5>
                <span>£3.95</span>
              </div>
              <div className="delivery-options__standard__price">
                <p>3-5 working days</p>
                <span>FREE on orders over £55</span>
              </div>
            </div>

            <div className="delivery-options__next">
              <div className="delivery-options__next__price">
                <h5>Next Day Delivery</h5>
                <span>£6.95</span>
              </div>
              <p>Order by 18:00 hours for next day delivery - Monday - Friday only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
