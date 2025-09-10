"use client"; // this is required since error can happen on client side too

export default function FilterError({ error }) {
  return (
    <div>
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
