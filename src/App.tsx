import { useMemo, useState } from 'react';
import { getBadgeClassName, type Badge } from './logic/badge';
import { calculatePrice } from './logic/price';
import { decrementQuantity, incrementQuantity } from './logic/quantity';
import { getPromoMessage } from './logic/promoCode';

const basePrice = 20;

export function App() {
  const [promoCode, setPromoCode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [badge, setBadge] = useState<Badge>('standard');
  const [showHelper, setShowHelper] = useState(false);
  const [priceResetHint, setPriceResetHint] = useState(false);

  const promoMessage = useMemo(() => getPromoMessage(promoCode, showHelper), [promoCode, showHelper]);

  const price = useMemo(() => {
    return calculatePrice({
      basePrice,
      quantity,
      promoCode,
      badge,
    });
  }, [promoCode, quantity, badge]);

  function resetForm() {
    setPromoCode('');
    setQuantity(1);
    setBadge('standard');
    setShowHelper(false);
    setPriceResetHint(true);
  }

  return (
    <main className="page">
      <h1>Ticket Kata</h1>

      <section className="card">
        <h2>Promo code helper text</h2>
        <input
          value={promoCode}
          onChange={(event) => setPromoCode(event.target.value)}
          onFocus={() => setShowHelper(true)}
          onBlur={() => setShowHelper(false)}
          placeholder="Promo code"
        />
        <p className="hint">{promoMessage}</p>
      </section>



      <section className="card">
        <h2>Status badge</h2>
        <div className={`badge ${getBadgeClassName(badge)}`}>{badge}</div>
        <div className="row">
          <button onClick={() => setBadge('early bird')}>Early bird</button>
          <button onClick={() => setBadge('standard')}>Standard</button>
          <button onClick={() => setBadge('sold out')}>Sold out</button>
        </div>
      </section>

      <section className="card">
        <h2>Quantity stepper</h2>
        <div className="row">
          <button onClick={() => setQuantity((value) => decrementQuantity(value))}>-</button>
          <strong>{quantity}</strong>
          <button onClick={() => setQuantity((value) => incrementQuantity(value))}>+</button>
        </div>
      </section>

      <section className="card">
        <h2>Clear form action</h2>
        <button onClick={resetForm}>Clear form</button>
        <p className="hint">{priceResetHint ? 'Inputs reset.' : 'This will clear the small demo form.'}</p>
      </section>

      <section className="card price-card">
        <h2>Price</h2>
        <p className="price">${price.toFixed(2)}</p>
      </section>
    </main>
  );
}
