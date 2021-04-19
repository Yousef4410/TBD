// Do I need to make another Navbar component?
import MediaCard from '../components/MediaCard'
import { MarketNav } from '../components/MarketNav'
import { TextField, makeStyles, Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  search: {
    margin: theme.spacing(2)

  },
  cards: {
    flexGrow: 1,
    padding: theme.spacing(5),
    margin: theme.spacing(5)
  },
  bg: {
    backgroundColor: '#F5F5F5',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    objectFit: 'contain',
    zIndex: '-1',
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
    <div className={classes.bg}>
      <Grid container justify="center">
        <form className={classes.search} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </form>
        <div className={classes.cards}>
          <MediaCard />
        </div>
      </Grid>
    </div>
    </>
  );
}
