import React from 'react';
import './Form.css';
import { Field, reduxForm } from 'redux-form';
import { required, notEmpty, requiredLength, isNumber } from './validators';
import Input from './input';

export class Form extends React.Component {
  state = {
    ok: null,
    failure: true
  };

  onSubmit(values) {
    console.log(values);
    return fetch(
      'https://us-central1-delivery-form-api.cloudfunctions.net/api/report',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(values)
      }
    )
      .then(res => {
        this.setState({ ok: res.ok, failure: res.ok });
      })
      .catch(err => console.log(err));
  }

  render() {
    let succeed = this.state.ok ? (
      <div>
        <h1>Success!</h1>
      </div>
    ) : null;
    let failure = !this.state.failure ? (
      <div>
        <h1>Delivery not found!</h1>
      </div>
    ) : null;
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <h2>Report a problem with your delivery</h2>
        <label>Tracking Number</label>
        <Field
          component={Input}
          type="text"
          name="trackingNumber"
          validate={[required, notEmpty, requiredLength, isNumber]}
        />

        <label>What is your issue?</label>
        <Field component="select" name="issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <label>Give more details (optional)</label>
        <Field component="textarea" rows="4" cols="50" name="details">
          {' '}
        </Field>
        <input type="submit" />
        {succeed}
        {failure}
      </form>
    );
  }
}

export default reduxForm({
  form: 'deliveryForm'
})(Form);
