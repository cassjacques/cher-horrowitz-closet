import GarmentCard from "./GarmentCard";

const GarmentsList = (props) => {
    const garments = props.garments.map(
        (garmentObj) => {
            return (
                <GarmentCard  key={garmentObj.id} garmentProp={garmentObj} />
            );
        }
    );
    return garments;
}

export default GarmentsList; 