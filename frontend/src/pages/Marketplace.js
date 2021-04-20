// Do I need to make another Navbar component?
import MediaCard from '../components/MediaCard'
import { MarketNav } from '../components/MarketNav'
import { TextField, makeStyles, Grid, Paper, Typography, Box } from '@material-ui/core'
import Copyright from '../components/Copyright';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles(theme => ({
  search: {
    margin: theme.spacing(2),
  },
  cards: {
    flexGrow: 1,
    padding: theme.spacing(5),
    margin: theme.spacing(5)
  },
  title: {
    margin: theme.spacing(4),
    fontSize: "8em"
  }
}))

// class SearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

export function Marketplace() {
  const classes = useStyles();
  return (
    <>
    <MarketNav />
     <Typography align="center" className={classes.title} variant="h3">
        Marketplace
      </Typography>
    <div>
      <Grid container justify="center" height="100%">
        {/*<form className={classes.search} noValidate autoComplete="off">
          <TextField fullWidth id="outlined-full-width" label="Search" variant="outlined" />
          </form>*/}
        <div className={classes.cards}>
          <MediaCard />
        </div>
      </Grid>
    </div>
    <Box mt={8}>
      <Copyright/>
    </Box>
    </>
  );
}
