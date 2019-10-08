import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import LCard from './LCard';
import SCard from './SCard';
import ECard from './ECard';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        margin: "10px",
        padding: "20px"
      }
    }
  }
});


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  dob: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: 'rgba(139, 0, 0, 0.4)',
  },
});

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {
    const {
      values: { firstName, lastName, dob, occupation, income, houseNumber, postCode }
    } = this.props;

    const bull = <span className={useStyles.bullet}>•</span>;

    let liquidCard = (income > 16000) ? true : false;
    let studentCard = (occupation === "Student") ? true : false;

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <Card className={useStyles.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={useStyles.avatar}>
                    {firstName.slice(0, 1)}
                  </Avatar>
                }
                title={firstName + " " + lastName}
                subheader={dob}
              />
              <CardContent>
                <div>
                  <Typography className={useStyles.pos} color="textSecondary">
                    {occupation}
                  </Typography>
                  <Typography className={useStyles.pos} color="textSecondary">
                    Annual income: {income}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" component="p">
                    Postcode: {postCode}
                    <br />
                    House number: {houseNumber}
                    <br />
                    <br />
                    Eligible for:
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                {liquidCard ? <LCard /> : ""}
                {studentCard ? <SCard /> : ""}
                <ECard />
              </CardActions>
            </Card>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
            <Button
              color="#contained-buttons"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </React.Fragment >
      </MuiThemeProvider >
    );
  }
}

export default Confirm;
