import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>Mi primera app</h1>
            <h3>{saludo}</h3>
            <p>{subtitulo}</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;