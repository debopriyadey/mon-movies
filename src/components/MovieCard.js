import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import { useDispatch } from 'react-redux';


import { watchlater } from '../actions/index';
import { watched } from '../actions/index';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    title: {
        height: 65,
    },
    desc: {
        //minheight: 345,
        height: 145,
        overflowY: "overlay",
    },
});

export default function MovieCard({ movie }) {
    const classes = useStyles();

    const dispatch = useDispatch()

    const handelWatchlater = (e) => {
        var savedMovies = JSON.parse(localStorage.getItem("Watchlater")) === null ? [] : JSON.parse(localStorage.getItem("Watchlater"));
        var flag = true;
        for (let user of savedMovies) {
            if (user.id === movie.id) {
                console.log("present");
                flag = false;
                break;
            } else {
                continue;
            }
        }
        if (flag) {
            e.preventDefault();
            dispatch(watchlater(movie))

        } else {
            alert("movie already added into watchlater");
        }
    }

    const handelWatched = (e) => {
        var savedMovies = JSON.parse(localStorage.getItem("Watched")) === null ? [] : JSON.parse(localStorage.getItem("Watched"));
        var flag = true;
        for (let user of savedMovies) {
            if (user.id === movie.id) {
                console.log("present");
                flag = false;
                break;
            } else {
                continue;
            }
        }
        if (flag) {
            e.preventDefault();
            dispatch(watched(movie))

        } else {
            alert("movie already added into watched");
        }
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {movie.title}
                    </Typography>
                    <small>{movie.release_date}</small>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                    < br />
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <Button title="add to watchlater" onClick={handelWatchlater} >{/* disabled={addedToWatchlater} */}
                    <IconButton aria-label="add to favorites">
                        <BookmarksOutlinedIcon />
                    </IconButton>
                </Button>
                <Button title="add to watched" onClick={handelWatched} >{/*disabled={addedToWatched} */}
                    <IconButton aria-label="share">
                        <VisibilityOffOutlinedIcon />
                    </IconButton>
                </Button>
            </CardActions>
        </Card>
    );
}