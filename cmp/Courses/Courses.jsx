import { 
    Card,
    Container,
    Typography,
    CardActions,
    CardContent,
    Button,
    Grid
} from "@mui/material";




const Courses = () =>{

    const myCourses = [
        {
            title : "Reactjs",
            price : "3000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum."
        },
        {
            title : "Nextjs",
            price : "2500",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum."
        },
        {
            title : "Javascript",
            price : "6000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum."
        },
        {
            title : "Basics",
            price : "3000",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum."
        }
    ]

    const NewCourse = ({item}) =>{
        const tmp = (
            <>
                <Grid item sm={4}>
                    <Card sx={{p:3}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                            {item.price}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            {item.desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined">Syllabus</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </>
        );
        return tmp;
    }



    const design = (
        <>
            <Container sx={{py:4,p:3}}>
                <Typography variant="h2">Courses</Typography>
                <Grid container spacing={5}>
                    {
                        myCourses.map((item,index)=>{
                            return <NewCourse key={index} item={item} />
                        })
                    }
                </Grid>
            </Container>
        </>
    );
    return design;
}

export default Courses;