import React from 'react';
import GarmentsList from '../components/GarmentsList';

//{name:'', size:'', id: 1}
class GarmentsPage extends React.Component {

    state = {
        garments: [],
    }

    componentDidMount() {
        const data = [
            { id: 1, name: 'MaxiDress', size: 'small' },
            { id: 2, name: 'MiniSkirt', size: 'X-Large' },
        ];

        this.setState({
            garments: data
        });
    }

    render() {
        return <GarmentsList garments={this.state.garments} />
    }
}

export default GarmentsPage;