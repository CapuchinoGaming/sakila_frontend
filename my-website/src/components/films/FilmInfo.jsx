function FilmInfo({ filmSelected, customerSelected }) {
  // this component simply displays customer info fields; create button moved
  if (filmSelected == 0) {
    return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>);
  }
  return (
    <div className="customer-info">
      <Field label='film_id' value='19'/>
      <Field label='title' value='AMADEUS HOLY'/>
      <Field label='description' value='A Emotional Display of a Pioneer And a Technical Writer who must Battle a Man in A Baloon'/>
      <Field label='category' value='Action'/>
      <Field label='actors' value='JOHNNY LOLLOBRIGIDA, JULIA MCQUEEN, VAL BOLGER, KIRK JOVOVICH, JAMES PITT, PENELOPE CRONYN'/>
      <Field label='rental_duration' value='6 days'/>
      <Field label='rental_rate' value='$0.99'/>
      <Field label='replacement_cost' value='$20.99'/>
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div style={styles.fieldContainer}>
      <b>{label}</b>
      <div>
        {value}
      </div>
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