import React, { useState } from "react"
import {
    Avatar,
    CssBaseline,
    TextField,
    Typography,
    makeStyles,
    Container
} from "@material-ui/core"
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp"
import { useForm } from "react-hook-form"
import SendingData from "./SendingData"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    avatar: {
        background: "#56F6E4"
    }
}));

export default function PostForm() {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [confirm, setConfirm] = useState(false);
    const { user } = useAuth0([])
    const splitStr = user.sub.split("|"); // {splitStr[1]}
    const [base64Img, setBase64Img] = useState({});
    const { handleSubmit, errors } = useForm({
        mode: "onBlur"
    });
    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
        setConfirm(false);
    }

    useEffect(() => {
        setData({ ...data, createdBy: splitStr[1] })
        setConfirm(false);
    }, []);


    function _handleReaderLoaded(readerEvt) {
        let binaryString = readerEvt.target.result;
        handleChange({
            target: {
                name: "image",
                value: btoa(binaryString)
            }
        })
        setBase64Img(btoa(binaryString));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {/*<Avatar className={classes.avatar}>
                    <DashboardSharpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create a post
                </Typography>}*/}
                <form
                    id="form"
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit((data) => {
                        setConfirm(true);
                    })}
                >
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="title"
                        label="title"
                        type="title"
                        id="title"
                        autoComplete="title"
                    />
                    {/* {errors.password && <div>{errors.password.message}</div>} */}
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="description"
                        name="description"
                        autoComplete="description"
                    />
                    {/* {errors.userName && <div>{errors.userName.message}</div>} */}
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="price"
                        label="price"
                        name="price"
                        autoComplete="price"
                    />
                    {/* {errors.age && <div>{errors.age.message}</div>} */}
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="location"
                        label="location"
                        name="location"
                        autoComplete="location"
                    />
                    {/* {errors.animal && <div>{errors.animal.message}</div>} */}
                    <TextField
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="contact"
                        label="contact"
                        name="contact"
                        autoComplete="contact"
                    />
                    {/* {errors.age && <div>{errors.age.message}</div>} */}



                    <input
                        type="file"
                        name="image"
                        id="file"
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => {
                            let file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = _handleReaderLoaded;
                                reader.readAsBinaryString(file);
                            }
                        }}
                    />

                    <SendingData data={data} confirm={confirm} />
                </form>
            </div>
        </Container>
    );
}