function FilmInfo({ filmSelected, customerSelected }) {
  // this component simply displays customer info fields; create button moved
  if (filmSelected == 0) {
    return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>);
  }
  return (
    <div className="customer-info">
      <Field label='First Name' value='thing'/>
      <Field label='Last Name' value='thing'/>
      <Field label='Email' value='thing'/>
      <Field label='Address' value='thing'/>
      <Field label='Phone No.' value='thing'/>
      <Field label='store_id' value='thing'/>
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div style={styles.fieldContainer}>
      <b>{label}</b>
      <p style={styles.input}>
        {value}
      </p>
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


export default FilmInfo;