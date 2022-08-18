import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  CardHeader,
  Avatar,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Checkbox,
} from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg"
            aria-label=""
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Stacy Kemmer"
        subheader="Aug 17, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="http://placeimg.com/640/480"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Quo ut expedita quia saepe. Sint expedita magni corrupti temporibus ut
          aut architecto rerum fugiat. Magni expedita temporibus tenetur
          consequatur.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
