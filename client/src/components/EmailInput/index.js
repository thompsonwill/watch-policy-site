import React from "react";

export default function EmailInput(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input
        type="email"
        class="form-control"
        id={props.id}
        onChange={props.onChange}

        placeholder={props.placeholder}
      />
    </div>
  );
}
