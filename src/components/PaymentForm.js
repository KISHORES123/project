import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'; // Import CSS for styling
import NavbarHome from './NavbarHome';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi'); // Default to UPI
  const [upiNumber, setUpiNumber] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   if (paymentMethod === 'card') {
  //     if (!stripe || !elements) return;

  //     const response = await fetch('http://localhost:4242/create-payment-intent', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount: 1000 }), // Amount in cents
  //     });

  //     const { clientSecret } = await response.json();

  //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     });

  //     if (error) {
  //       console.error('[error]', error);
  //       alert(error.message);
  //     } else if (paymentIntent.status === 'succeeded') {
  //       alert('Payment successful!');
  //     }
  //   } else if (paymentMethod === 'upi') {
  //     alert(`UPI payment with UPI Number: ${upiNumber}. This is a mock implementation.`);
  //   } else if (paymentMethod === 'netbanking') {
  //     alert(`Net Banking payment with Bank: ${bank}, Account Number: ${accountNumber}, IFSC Code: ${ifscCode}. This is a mock implementation.`);
  //   }

  //   setLoading(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    let paymentDetails = {
      paymentMethod: paymentMethod,
      upiNumber: paymentMethod === 'upi' ? upiNumber : '',
      bank: paymentMethod === 'netbanking' ? bank : '',
      accountNumber: paymentMethod === 'netbanking' ? accountNumber : '',
      ifscCode: paymentMethod === 'netbanking' ? ifscCode : '',
      amount: 1000 // Example amount, update accordingly
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/payments/save', paymentDetails);
      
      if (response.data) {
        alert('Payment details saved successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error processing your payment.');
      
    }
  
    setLoading(false);
  };
  
  

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <NavbarHome />
      <h2>Select Payment Method</h2>
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={paymentMethod === 'upi'}
            onChange={() => setPaymentMethod('upi')}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="netbanking"
            checked={paymentMethod === 'netbanking'}
            onChange={() => setPaymentMethod('netbanking')}
          />
          Net Banking
        </label>
      </div>

      {paymentMethod === 'card' && (
        <>
          <CardElement />
          <button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay'}
          </button>
        </>
      )}

      {paymentMethod === 'upi' && (
        <div className="upi-section">
          <label>
            UPI Number:
            <input
              type="text"
              value={upiNumber}
              onChange={(e) => setUpiNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Pay with UPI'}
          </button>
        </div>
      )}

      {paymentMethod === 'netbanking' && (
        <div className="netbanking-section">
          <label>
            Select Bank:
            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              required
            >
              <option value="">Select Bank</option>
              <option value="bank1">Indian Bank</option>
              <option value="bank2">Union Bank</option>
              <option value="bank3">State Bank</option>
            </select>
          </label>
          <label>
            Account Number:
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </label>
          <label>
            IFSC Code:
            <input
              type="text"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Pay with Net Banking'}
          </button>
        </div>
      )}
    </form>
  );
};

export default PaymentForm;
