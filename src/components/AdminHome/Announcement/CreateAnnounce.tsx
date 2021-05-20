import React, {BaseSyntheticEvent, Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export interface AnnouncementCreateState {
    title: string;
    date: string;
    description: string;
    response: boolean;
}

export interface AnnouncementCreateProps {}

class AnnouncementCreate extends Component <AnnouncementCreateProps, AnnouncementCreateState> {
   //const classes = useStyles();
   //const bull = <span className={classes.bullet}>•</span>;
    constructor(props: AnnouncementCreateProps) {
        super(props);
        this.state = {
            title: "",
            date: "",
            description: "",
            response: false,
        };
    }

    handleSubmit(e: BaseSyntheticEvent) {
        e.preventDefault();
        console.log("Fetch in announcement Create")
        fetch(`http://localhost:3000/waterloo/announcement`, {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                title: this.state.title,
                date: this.state.date,
                description: this.state.description,
                response: this.state.response,
            }),
        },
        )
        .then((res) => {
            if (res.status !== 200) {
                alert ("Unable to create announcement");
            } else {
                alert ("Announcement successfully created!");
            }
            return res.json()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        })
    }

    handleChange(e: BaseSyntheticEvent) {
        this.setState((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value as Pick<
            AnnouncementCreateState,
            keyof AnnouncementCreateState
            >,
        }));
    }

    componentDidMoun() {
        this.setState({
            title: "",
            date: "",
            description: "",
            response: false,        
        })
    }

    render() {
                return(
            <div>
                <div className = "announcement">Announcement Form</div>
                <Form onSubmit = {(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label htmlFor = "title"></Label>
                        <Input
                        type = "text"
                        placeholder = "Announcement Title"
                        name = "title"
                        value = {this.state.title}
                        onChange = {(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "date"></Label>
                        <Input
                        type = "text"
                        placeholder = "Announcement Date"
                        name = "date"
                        value = {this.state.date}
                        onChange = {(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "description"></Label>
                        <Input
                        type = "text"
                        placeholder = "Announcement Description"
                        name = "description"
                        value = {this.state.description}
                        onChange = {(e) => this.handleChange(e)}
                        />
                    </FormGroup>
                    <Button className = "CreateAnnounce" type = "submit">Submit Announcement</Button>
                </Form>
            </div>
        )
}

        
};

export default AnnouncementCreate;



/* insert under function AnnouncementCreate()

  */

// CARD FROM MATERIAL UI //

// return(
//     <Card className="announcementCreate" onSubmit = {(e) => this.handleSubmit(e)} variant="outlined" color = "black">
//   <CardContent >
//       <div className = "cardContent">
//     <Typography placeholder="title">
//         Confused
//     {this.state.title}
//     </Typography>
//     <Typography variant="h5" component="h2" placeholder = "date">
//         As
//       {this.state.date}
//     </Typography>
//     <Typography className="AnnouncementText" color="textSecondary" placeholder="description">
//         Always
//       {this.state.description}
//     </Typography>
//     <Typography variant="body2" component="p" placeholder = "response">
//         Poop
//       {this.state.response}
//       <br />
//       {'this should be a card displaying an announcemnt'}
//     </Typography>
//     </div>
//   </CardContent>
//   <CardActions>
//     <Button size="small">Learn More</Button>
//   </CardActions>
// </Card>
// );      

// };
    