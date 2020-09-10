import React from "react";

export default function TextInput(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input
        type="text"
        class="form-control"
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}
