import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import dummyImg from '../../static/project.jpg'

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dummyImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            대표 프로젝트 제목
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Position : FrontEnd
          </Typography>
          <Typography variant="body2" color="text.secondary">
            사용 기술
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          포트폴리오 URL
        </Button>
      </CardActions>
    </Card>
  );
}
