import React from 'react';
import './Form.css';
import { Field, reduxForm } from 'redux-form';
import { required, notEmpty, requiredLength, isNumber } from './validators';
import Input from './input';

export class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Report a problem with your delivery</h2>
        <label>Tracking Number</label>
        <Field
          component={Input}
          type="text"
          name="tracking-number"
          validate={[required, notEmpty, requiredLength, isNumber]}
        />
        <label>What is your issue?</label>
        <Field component="select" name="issue">
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
        </Field>
        <label>Give more details (optional)</label>
        <Field component="textarea" rows="4" cols="50" name="other-issue">
          {' '}
        </Field>
        <input type="submit" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'deliveryForm'
})(Form);
