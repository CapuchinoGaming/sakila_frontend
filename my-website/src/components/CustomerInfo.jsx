import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { sendRequest } from '../api/handler';

function CustomerInfo({ customerSelected }) {
  // this component simply displays customer info fields; create button moved
  if (customerSelected == false) {
    return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>);
  }
  return (
    <div className="customer-info">
      <Field label='First Name' name='thing'/>
      <Field label='Last Name' name='thing'/>
      <Field label='Email' name='thing'/>
      <Field label='Address' name='thing' placeholder='Street Address'/>
      <Field placeholder='State / Province' name='thing'/>
      <Field placeholder='Zip Code / Postal Code' name='thing'/>
      <Field label='Phone No.' name='thing'/>
      <Field label='store_id' name='thing'/>
    </div>
  )
}

function CreateDialog({ open, onClose, form, onChange, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Customer</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter customer details</DialogContentText>
        <input name="first_name" placeholder="First name" value={form.first_name} onChange={onChange} />
        <input name="last_name" placeholder="Last name" value={form.last_name} onChange={onChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="address.address_line1" placeholder="Street address 1" value={form.address.address_line1} onChange={onChange} />
        <input name="address.address_line2" placeholder="Street address 2" value={form.address.address_line2} onChange={onChange} />
        <input name="phone_number" placeholder="Phone number" value={form.phone_number} onChange={onChange} />
        <input name="address.district" placeholder="District/State" value={form.address.district} onChange={onChange} />
        <input name="address.city" placeholder="City" value={form.address.city} onChange={onChange} />
        <input name="address.country" placeholder="Country" value={form.address.country} onChange={onChange} />
        <input name="address.postal_code" placeholder="Postal code" value={form.address.postal_code} onChange={onChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

function Field({ label, name, placeholder, value, onChange }) {
  return (
    <div style={styles.fieldContainer}>
      <b>{label}</b>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px",
  },
  input: {
    padding: "2px",
    fontSize: "14px",
  },
};


export default CustomerInfo;