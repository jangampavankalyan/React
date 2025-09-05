import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ name, price, description, image }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-items-action">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
