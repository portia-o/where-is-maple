export function Number({ number }) {
  const nn = number < 10 ? "0".concat(String(number)) : String(number);
  return (
    // Convert 365 to "365" and convert it to ["3", "6", "5"],
    // so we can iterate over it.
    <span className="home__numbers">
      {nn.split("").map((n, i) => (
        // Always prefer using item IDs as keys,
        // but in this case we have no guaranteed unique ID for each item,
        // so we use the index number instead. Avoid this whenever possible.
        // Read more here: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
        <pre className="home__number" key={i}>
          {n}
        </pre>
      ))}
    </span>
  );
}
