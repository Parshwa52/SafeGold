import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import countryList from 'react-select-country-list';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import crypt from 'crypto-js';
//import Select from 'react-select';
import Layout from '../components/Layout';
import {
  Form,
  Modal,
  Header,
  Icon,
  Button,
  Input,
  Dropdown,
  Menu,
  Radio,
  Message,
  Segment,
  Checkbox,
  Confirm
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import safegold from '../ethereum/safegold1';
import web3 from '../ethereum/web3';
export default class GoldSafe extends Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      id:'',
      quant:'',
      toc:'',
      fromc:'',
      expl:'',
      billamt:null,
      options:this.options,
      value:null,
      defcheck:false,
      open:false,
      modalOpen:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose = () => this.setState({ modalOpen: false })
  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.quant.match(/^(0|[1-9][0-9]*)$/)) {
      //alert("Quantity should be numeric");
      this.setState({
        loading: false,
        modalOpen:true
      });
      this.quant.focus()
    }
    else if (!this.state.billamt.match(/^(0|[1-9][0-9]*)$/)) {
      //alert("Amount should be numeric");
      this.setState({
        loading: false,modalOpen:true

      });
      this.billamt.focus()
    }
    else{
    this.setState({open:true,loading:true});}
  }

  handleCancel = () => this.setState({
    open: false,
    loading: false
  });
  handleconf = async (event) => {
    event.preventDefault();
    this.setState({
      open: false
    });
    //console.log(parseInt(this.state.quant)+10);
    console.log(this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant+this.state.billamt+this.state.defcheck);
    try {
      let reacth;
      let test;
      test = (this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant).toString();
      test = test.toLowerCase();
      console.log(test);
      reacth = crypt.SHA256(test).toString();
      console.log(reacth);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      await safegold.methods.storegold(reacth,(this.state.id).toString(),(this.state.quant).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.expl).toString(),parseInt(this.state.billamt)).send({
        from: accounts[0]
      });
      this.setState({
        loading: false,
        id:'',
        quant:'',
        toc:'',
        fromc:'',
        expl:'',
        billamt:null,
        defcheck:false
      });
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
        open: false
      });
    }
  }
  handleChange = (event, {
    name,
    value
  }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({
        [name]: value
      });
    }
  }
  selectCountry =(val)=> {
    this.setState({ toc: val });
  }
  selectCountry2 =(val)=> {
    this.setState({ fromc: val });
  }


  render() {
    return ( <
      Segment inverted color = 'blue'>
      <
      Layout >
      <
      h1 > <font color="white">Exporter's Portal</font> < /h1> <
      Segment inverted color = "orange" >
      <
      Message attached header = 'Welcome to Exporting Form!'
      content = 'Fill out the form below to fill details and export the gold.'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form >
      <
      br / >


      <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "Manufacture ID"
      fluid ref = {
        (input) => {
          this.id = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.id
      }
      onChange = {
        event => this.setState({
          id: event.target.value
        })
      }
      /> <
      /Form.Field>

      <
      Form.Field >
      <
      Input label = "Quantity(in kg)"

      fluid ref = {
        (input) => {
          this.quant = input;
        }
      }
      //labelPosition=""
      value = {
        this.state.quant
      }
      onChange = {
        event => this.setState({
          quant: event.target.value
        })
      }
      /> <
      /Form.Field>

      </Form.Group>
      <h2><font color="black">From:</font></h2>
      <CountryDropdown
          value={this.state.fromc}
          onChange={(val) => this.selectCountry2(val)} />
          <h2><font color="black">To:</font></h2>
      <CountryDropdown

          value={this.state.toc}
          onChange={(val) => this.selectCountry(val)} /><br/>


          <br/>
          <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "Exporting License"
      fluid ref = {
        (input) => {
          this.expl = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.expl
      }
      onChange = {
        event => this.setState({
          expl: event.target.value
        })
      }
      /> <
      /Form.Field>
      <
      Form.Field >
      <
      Input label = "Bill amount"
      fluid ref = {
        (input) => {
          this.billamt = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.billamt
      }
      onChange = {
        event => this.setState({
          billamt: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>

      <
      br / >
      <Form.Field>
      <
      Checkbox label = 'I agree that all the information is correct and properly verified.'
      onChange = {
        event => this.setState({
          defcheck: true
        })
      }
      /> <
      /Form.Field> <
      br / >

       <
      Confirm open = {
        this.state.open
      }
      cancelButton = 'Go Back'
      confirmButton = "Export"
      onCancel = {
        this.handleCancel
      }
      onConfirm = {
        this.handleconf
      }
      />
      <Modal
      trigger={<
      Button loading = {
        this.state.loading
      }
      disabled = {
        this.state.id=='' || this.state.quant=='' || this.state.toc=='' || this.state.fromc=='' || this.state.expl=='' || this.state.billamt==null ||this.state.defcheck==false
      }
      primary onClick = {
        this.handleSubmit
      }
       > Export < /Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='ban' content='Error in Details' />
        <Modal.Content>
          <h3>Quantity/Bill Amount Should be numeric</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
      <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
