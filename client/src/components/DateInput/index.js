import React from "react";

export default function DateInput(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input
        type="date"
        class="form-control"
        id={props.id}
        onChange={props.onChange}

        placeholder={props.placeholder}
      />
    </div>
  );
}
