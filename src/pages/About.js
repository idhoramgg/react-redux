import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const About = (props) => {
    const pemain = props.pemain
    return (
        <div>
            <h2>About page</h2>
                <span> Jumlah Pemain : </span> <span><strong>{pemain}</strong></span> <br/>

                <Link to="/"> Back </Link>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        pemain: state.pemain.pemainInti
    }
}


export default connect(mapStateToProps, null)(About);