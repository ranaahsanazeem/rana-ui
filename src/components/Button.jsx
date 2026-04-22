const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const variantClass = `btn-${variant}`;
    return (
        <button 
            className={`btn ${variantClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
