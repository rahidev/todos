import React from 'react';
import './qod.styles.scss';

// const Qod = ({ quote }) => (
//     <div className="qod">
//         <h3 className="qod__heading">Quote Of The Day</h3>
//         <p className="qod__quote">"{quote}"</p>
//     </div>
// );

class Qod extends React.Component {
    state = {
        quote: ''
    };

    componentDidMount() {
        const getQuote = async () => {
            const res = await fetch('http://quotes.rest/qod.json');
            const data = await res.json();
            this.setState({ quote: data.contents.quotes[0].quote });
        };
        getQuote();
    }

    render() {
        const { quote } = this.state;
        return (
            <div className="qod">
                <h3 className="qod__heading">Quote Of The Day</h3>
                <p className="qod__quote">"{quote}"</p>
            </div>
        );
    }
}

export default Qod;
