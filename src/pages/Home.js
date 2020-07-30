import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// store
import { store } from '../store';

// ACTION
import { tambahPemain, kurangiPemain } from '../actions/pemain'

const ButtonTambah = styled.button`
    background-color: green;
    padding: 10px 20px;
    margin: 15px;
`
const ButtonKurang = styled(ButtonTambah)`
    background-color: red;
    color: white;
`

class Home extends Component {
    constructor(){
        super();
        this.state = {
            pemain: 0
        }
    }

    // rendering
    componentDidMount() {
    
     this.setState({
         // mengambil dari redux getState
         pemain: store.getState().pemain.pemainInti
     })
     // menggunakan subscribe
     store.subscribe(() => {
         console.log('hai disini ada perubahan lho');
        this.setState({
            pemain: store.getState().pemain.pemainInti
        })
     })
    }
     // fungsi tambah menggunakan dispatch dari redux

    render(){
        console.log(this.props);
        console.log(store.getState())
        const pemain = store.getState().pemain.pemainInti
        return(
            <div>
                <h2>Welcome to Football Team App</h2>
                    <span>Jumlah Pemain :</span> <span> <strong>{pemain}</strong></span> <br/>
                    <ButtonKurang onClick={this.props.kurangiPemain}> Kurang </ButtonKurang>
                    <ButtonTambah onClick={this.props.tambahPemain}> Tambah </ButtonTambah>
            </div>
        )
    }
}

// passing fungsi dispatch dari redux store, ke props aplikasi yg kita mau komponen/pages
const mapDispatchToProps = (dispatch) => {
    return {
        tambahPemain: () => dispatch(tambahPemain),
        kurangiPemain: () => dispatch(kurangiPemain)

    }
}

// connect method yang membutuhkan 2 parameter, fungsi pembagi ("currying")
export default connect(null, mapDispatchToProps)(Home);