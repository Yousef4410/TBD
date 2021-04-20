import React, { useState, useEffect } from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react'

function SendingData(props) {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0()
  console.log("Data: " + JSON.stringify(props.data));
  console.log("Confirm: " + props.confirm);

  useEffect(() => {
    if (token) {
      setLoading(true);
      alert(JSON.stringify(props.data))
      axios.post("https:localhost:5000/posts/create", props.data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(function (response) {
          setLoading(false);
          console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        })
      }
  }, [token, props.data]);

  return (
    <div>
      <Box component="span" m={2} display="block"></Box>
      <Box component="span" display="block">
        <Button
          endIcon={<AddIcon />}
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => {
            setToken(getAccessTokenSilently());
          }}
          type="submit"
          fullWidth
        >
          Create
        </Button>
      </Box>
      {loading && <CircularProgress color="secondary" />}
    </div>
  );
}

export default SendingData;
