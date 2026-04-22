const Card = ({ title, description, image, children, className = '' }) => {
    return (
        <div className={`glass glass-hover ${className}`} style={{ padding: '24px', overflow: 'hidden' }}>
            {image && (
                <div style={{ margin: '-24px -24px 20px -24px', height: '200px', overflow: 'hidden' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}
            <h3 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{description}</p>
            {children}
        </div>
    );
};

export default Card;
