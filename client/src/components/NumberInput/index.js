import React from "react";

export default function NumberInput(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input
        type="number"
        class="form-control"
        id={props.id}
        onChange={props.onChange}

        placeholder={props.placeholder}
      />
    </div>
  );
}
