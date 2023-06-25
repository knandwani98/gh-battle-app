import React from "react";

const Miniform = ({ name, state, handleChange, handleSubmit }) => {
  return (
    <div className="input-box ">
      <input
        onChange={handleChange}
        type="text"
        name={name}
        placeholder="Github Username"
        value={state[name].input}
      />

      <button
        className="submit-btn"
        onClick={() => handleSubmit(name)}
        disabled={!state[name].input}
      >
        Submit
      </button>
    </div>
  );
};

export default Miniform;
