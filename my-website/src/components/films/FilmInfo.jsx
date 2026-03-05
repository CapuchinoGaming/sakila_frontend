function FilmInfo({ filmSelected, filmDetails }) {
    // this component simply displays film info fields
    if (filmSelected == 0) {
        return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>);
    } else if (!filmDetails.film) {     // Prevents FilmInfo from loading before filmDetails is defined
        return (<div className="customer-info" style={{backgroundColor: '#dddddd'}} ></div>);
    } else {
        const actorsList = (
        <div>
            {(filmDetails.actors || []).map((a) => (
            <div key={a.actor_id}>- {a.first_name} {a.last_name}</div>
            ))}
        </div>
        );

        return (
            <>
                <div className="line-container">
                        <div className="line-label" style={{backgroundColor: "#2F6FA8"}}>
                                <div>Film Details:</div>
                        </div>
                </div>

                <div className="customer-info">
                    <Field label='film_id' value={filmDetails.film.film_id}/>
                    <Field label='title' value={filmDetails.film.title}/>
                    <Field label='description' value={filmDetails.film.description}/>
                    <Field label='category' value={filmDetails.category}/>
                    <Field label='actors' value={actorsList}/>
                    <Field label='rental_duration' value={`${filmDetails.film.rental_duration} days`}/>
                    <Field label='rental_rate' value={`$${filmDetails.film.rental_rate}`}/>
                    <Field label='replacement_cost' value={`$${filmDetails.film.replacement_cost}`}/>
                </div>
            </>
        )
    }
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