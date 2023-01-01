import React from "react";
import Button from "react-bootstrap/Button";

export const Counter = () => {
  return (
    <div>
      <h2> This a Counter App</h2>
      <h3>Count: 0</h3>

      <Button variant="success">Success</Button>
      <Button variant="light">Light</Button>
    </div>
  );
};
