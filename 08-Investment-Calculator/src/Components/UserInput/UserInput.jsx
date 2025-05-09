import { useState } from "react";

export default function UserInput({ userinput, inputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userinput.initialInvestment}
            onChange={(event) =>
              inputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userinput.annualInvestment}
            onChange={(event) =>
              inputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="text"
            required
            value={userinput.expectedReturn}
            onChange={(event) =>
              inputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="text"
            required
            value={userinput.duration}
            onChange={(event) => inputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
