// Do I need to make another Navbar component?
import MediaCard from "../components/MediaCard";
import { MarketNav } from "../components/MarketNav";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Copyright from "../components/Copyright";
import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

let uri = "http://localhost:5000"
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development"){
  uri = "http://localhost:5000"
}
else if (process.env.NODE_ENV === "production"){
  uri = "https://cop4331-app.herokuapp.com"
}

const useStyles = makeStyles((theme) => ({
  search: {
    margin: theme.spacing(2),
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cards: {
    flexGrow: 1,
    padding: theme.spacing(5),
    margin: theme.spacing(5),
  },
  title: {
    margin: theme.spacing(4),
  },
}));

const theme = createMuiTheme();

theme.typography.h3 = {
  fontWeight: "100",
  fontSize: "8em",
  [theme.breakpoints.down("md")]: {
    fontSize: "6em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.7em",
  },
};

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

// function handleChange(data){
//     (async () => {
//       if (data === ""){
//               const apiResult = await axios.get("http://localhost:5000/posts/get");
//               return (
//                 <div>
//                   <Grid container justify="center" height="100%">
//                     <div className={classes.cards}>
//                       <MediaCard data={apiResult.data}/>
//                     </div>
//                   </Grid>
//                 </div>
//               )
//       }
//       else{
//               const apiResult = await axios.get(`http://localhost:5000/posts/search/title/${data}`);
//               return (
//                 <div>
//                   <Grid container justify="center" height="100%">
//                     <div className={classes.cards}>
//                       <MediaCard data={apiResult.data}/>
//                     </div>
//                   </Grid>
//                 </div>
//               )
//       }
//     })();
// }

export function Marketplace() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const [data, setData] = useState("");
  var apiResult = {};

  async function initialPosts() {
    apiResult = await axios.get(`${uri}/posts/get`);
    // console.log(apiResult.data);

    setPosts(apiResult.data);
  }
  if (!data) initialPosts();

  return (
    <>
      <MarketNav />
      <ThemeProvider theme={theme}>
        <Typography align="center" className={classes.title} variant="h3">
          Marketplace
        </Typography>
      </ThemeProvider>
      <SearchBar
        className={classes.search}
        value={data}
        onChange={(value) => setData(value)}
        onRequestSearch={async () => {
          if (data === "") {
            apiResult = await axios.get(`${uri}/posts/get`);
          } else {
            apiResult = await axios.get(
              `${uri}/posts/search/title/${data}`
            );
            // console.log(apiResult.data);
          }
          setPosts(apiResult.data);
        }}
      />
      <div>
        <Grid container justify="center" height="100%">
          <div className={classes.cards}>
            <MediaCard data={posts} />
          </div>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
}

export default Marketplace;
