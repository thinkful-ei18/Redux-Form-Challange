import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form>
      <h2>Report a problem with your delivery</h2>
      <label>Tracking Number</label>
      <input type="text" />
      <label>What is your issue?</label>
      <select>
        <option value="My delivery hasn't arrived">
          My delivery hasn't arrived
        </option>
        <option value="The wrong item was delivered">
          The wrong item was delivered
        </option>
        <option value="Part of my order was missing<">
          Part of my order was missing
        </option>
        <option value="Some of my order arrived damaged">
          Some of my order arrived damaged
        </option>
        <option value="Others (give details below)">
          Others (give details below)
        </option>
      </select>
      <label>Give more details (optional)</label>
      <textarea rows="4" cols="50">
        {' '}
      </textarea>
    </form>
  );
}
