import React ,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

  

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundSize:"auto",
      backgroundPosition:"center",
    },
    textFieldPostalCode:
    {
        width:'95%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldsSmall:
    {
      width:'95%',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "95%",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));
  
export default class CountrySelect extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 ,country: '', region: ''};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

  selectCountry (val) {
    this.setState({ country: val });
  }

  render () {
    const { country} = this.state;
    const classes = makeStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value="Canada"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}