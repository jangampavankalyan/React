// For Indian Currency use en-IN and currency : "INR"

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  maximumSignificantDigits: 6,
  currency: "USD",
});
