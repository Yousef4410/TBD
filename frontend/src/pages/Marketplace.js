// Do I need to make another Navbar component?
import MediaCard from '../components/MediaCard'
import { MarketNav } from '../components/MarketNav'
import { TextField, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  search: {
    margin: theme.spacing(2)

  },
  cards: {
    flexGrow: 1,
    padding: theme.spacing(5),
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
      <Grid container justify="center">
        <form className={classes.search} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
        <div className={classes.cards}>
          <MediaCard />
        </div>
      </Grid>
    </>
  );
}
