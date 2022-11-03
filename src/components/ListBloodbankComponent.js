import React, { Component } from 'react'
import BloodbankService from '../services/BloodbankService'

export default class ListBloodbankComponent extends Component {
    constructor(props){
    super(props)
        
    this.state = {
        bloodbanks: []
        }
        this.addBloodbank = this.addBloodbank.bind(this);
        this.editBloodbank = this.editBloodbank.bind(this);
        this.deleteBloodbank = this.deleteBloodbank.bind(this);
    }

    deleteBloodbank(id){
        BloodbankService.deleteBloodbank(id).then( res =>{
            this.setState({bloodbanks: this.state.bloodbanks.filter(bloodbank => bloodbank.id !== id)});
        })
    }    
    
    editBloodbank(id){
        this.props.history.push(`/add-bloodbank/${id}`);
    }

    addBloodbank(){
       this.props.history.push('/add-bloodbank/_add'); 
    }

    componentDidMount(){
        BloodbankService.getBloodbank().then((res) => {
            this.setState({ bloodbanks: res.data })
            console.log(res.data);
        })
    }

    render() {
    return (
      <div>
        <h2 className="text-center">Blood Bank List</h2>
        <div className="row">
            <button className='btn btn-danger' onClick={this.addBloodbank}>Add Blood Bank</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Blood Bank Name</th>
                        <th>Blood Bank Type</th>
                        <th>Blood Bank Address</th>
                        <th>Blood Stocks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    
                <tbody>

                    {
                        this.state.bloodbanks.map(
                            bloodbank =>
                            <tr key = {bloodbank.id}>
                                <td>{bloodbank.bloodbankName}</td>
                                <td>{bloodbank.bloodbankType}</td>
                                <td>{bloodbank.bloodbankAddress}</td>
                                <td>{bloodbank.bloodStocks}</td>
                                <td>
                                    <button onClick = { () => this.editBloodbank(bloodbank.id)} className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick = { () => this.deleteBloodbank(bloodbank.id)} className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
