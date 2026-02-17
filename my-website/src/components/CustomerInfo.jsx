function CustomerInfo({ customerSelected }) {
  if (customerSelected == false)
  {
    return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>)
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