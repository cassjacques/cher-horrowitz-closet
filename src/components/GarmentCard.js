const GarmentCard = (props) => {
    return (
        <div key={props.garmentProp.id}>
            <h4>{props.garmentProp.name}</h4>
            <p>
                <strong>Size:</strong> {props.garmentProp.size}
            </p>
        </div>
    );
};

export default GarmentCard;