import React, { Component } from 'react'
import BloodbankService from '../services/BloodbankService';

export default class CreateBloodbankComponent extends Component {
    constructor(props){
    super(props)
        this.state = {

            //step 2
            id: this.props.match.params.id,
            bloodbankName: '',
            bloodbankAddress: '',
            bloodbankType: '',
            bloodStocks: ''
        }
        this.changebloodbankNameHandler = this.changebloodbankNameHandler.bind(this);
        this.changebloodbankAddressHandler = this.changebloodbankAddressHandler.bind(this);
        this.changebloodbankTypeHandler = this.changebloodbankTypeHandler.bind(this);
        this.changebloodStocksHandler= this.changebloodStocksHandler.bind(this);
        this.saveBloodbank= this.saveBloodbank.bind(this);
    }

    //Step 3
    componentDidMount(){

        //step 4
        if(this.state.id === '_add'){
            return 
        }
        else
        {
            BloodbankService.getBloodbankById(this.state.id).then((res) =>{
                let bloodbank = res.data;
                this.setState({bloodbankName: bloodbank.bloodbankName, bloodbankAddress: bloodbank.bloodbankAddress, bloodbankType: bloodbank.bloodbankType, bloodStocks: bloodbank.bloodStocks});
            });
        }
    }

    saveBloodbank = (e) => {
        e.preventDefault();
        let bloodbank = {bloodbankName: this.state.bloodbankName, bloodbankAddress: this.state.bloodbankAddress, bloodbankType: this.state.bloodbankType, bloodStocks: this.state.bloodStocks};
        console.log('bloodbank =>' + JSON.stringify(bloodbank));

        //Step 5
        if(this.state.id === '_add'){
            BloodbankService.createBLoodbank(bloodbank).then(res => {
                this.props.history.push('/bloodbanks');
            });  
        }
        else{
            BloodbankService.updateBloodbank(bloodbank,this.state.id).then( res => {
                this.props.history.push('/bloodbanks');
            })
        }

        
    }

    changebloodbankNameHandler = (event) => {
        this.setState({bloodbankName: event.target.value});
    }

    changebloodbankAddressHandler = (event) => {
        this.setState({bloodbankAddress: event.target.value});
    }

    changebloodbankTypeHandler = (event) => {
        this.setState({bloodbankType: event.target.value});
    }

    changebloodStocksHandler = (event) => {
        this.setState({bloodStocks: event.target.value});
    }

    cancel(){
        this.props.history.push('/bloodbanks'); 
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className='text-center'>Add Blood Bank</h3>
        }else{
            return <h3 className='text-center'>Update Blood Bank</h3>
        }
    }

    render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        this.getTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Blood Bank Name: </label>
                                <input placeholder='Blood Bank Name' name="bloodbankName" className='form-control' value={this.state.bloodbankName} onChange={this.changebloodbankNameHandler} required/>
                            </div>

                            <div className='form-group'>
                                <label>Blood Bank Address: </label>
                                <input placeholder='Blood Bank Address' name="bloodbankAddress" className='form-control' value={this.state.bloodbankAddress} onChange={this.changebloodbankAddressHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>Blood Bank Type: </label>
                                <input placeholder='Blood Bank Type' name="bloodbankType" className='form-control' value={this.state.bloodbankType} onChange={this.changebloodbankTypeHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>Blood Bank Stock: </label>
                                <input placeholder='Blood Bank Stock' name="bloodStocks" className='form-control' value={this.state.bloodStocks} onChange={this.changebloodStocksHandler}/>
                            </div>

                            <button className='btn btn-success' onClick={this.saveBloodbank.bind(this)}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
