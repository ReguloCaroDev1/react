import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Info } from "../service/Info";
import { Menu } from "./menu";

export const Singer = () => {
  useEffect(() => {
    getData();
  }, []);
  const [singer, setSinger] = useState<any[]>([]);
  const getData = async () => {
    const url = "http://3.218.67.164:9009/musicplayer/singer/";
    const resp = await fetch(url);
    const data = await resp.json();
    const dataLog = data.map((resp: any) => {
      return {
        id: resp.id,
        name: resp.name,
        stageName: resp.stageName,
        nationality: resp.nationality,
        image: resp.image,
      };
    });
    console.log(dataLog);
    setSinger(dataLog);
  };

  return (
    <>
      <Menu />
      <div>
        {singer.map((resp) => (
          <Card sx={{ maxWidth: 345 }} key={resp.id}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={resp.image} />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {resp.stageName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {resp.nationality}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};
