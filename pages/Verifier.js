import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import countryList from 'react-select-country-list';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import crypt from 'crypto-js';
//import Select from 'react-select';ncncnncncnc
import Layout from '../components/Layout';
import {
  Form,
  Button,
  Input,
  Dropdown,
  Modal,
  Icon,
  Header,
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
export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      text1:'',
      text2:'',
      modalOpen:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose = () => {
    this.setState({ modalOpen: false });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    let perm;


      try {

          const accounts = await web3.eth.getAccounts();
          perm = await safegold.methods.checkpermit((this.state.id).toString()).call({
            from: accounts[0]
          });
          if(perm=="true")
          {
            this.setState({
              modalOpen:true,
              text2:"Congrats!",
              text1:"Buy it, Its trusted gold.",
              iconname:'thumbs up'
            });
          }
          else {
            this.setState({
              modalOpen:true,
              text2:"Beware!",
              text1:"Buy at your own risk, Its not trusted",
              iconname:'ban'
            });
          }

        } catch (err) {
            console.log(err);
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



  render() {
    return ( <
      Segment inverted color = 'blue'>
      <
      Layout >
      <
      h1 > <font color="white">User's Portal</font> < /h1> <
      Segment inverted color = "orange" >
      <
      Message attached header = 'Welcome User!'
      content = 'Check whether you are buying trusted or smuggled gold.'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form >
      <
      br / >
      <h2><font color="black">1. You may be retailer,distributor or even a normal user</font></h2>
      <h2><font color="black">2. Verify whether the gold you are buying is smuggled or not.</font></h2>
      <h2><font color="black">3. If you purchase smugggled gold, that gold won't have any value and eventually no one will buy it.</font></h2>
      <h2><font color="black">4. So, Verify your gold here and then buy it.</font></h2>

      <br/>
      <
      Form.Field >
      <
      Input label = "Manufacture Id"
      fluid ref = {
        (input) => {
          this.id = input;
        }
      }
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

      <Modal
        trigger={<
        Button
        disabled = {
          this.state.id==''
        }
        primary onClick = {
          this.handleSubmit
        }
         > Verify < /Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon={this.state.iconname} content={this.state.text2} />
        <Modal.Content>
          <h3>{this.state.text1}</h3>
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
