import img from './error-cat.gif';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '300px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt="error" />
    )
}

export default ErrorMessage;