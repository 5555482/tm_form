import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

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
export class Success extends Component {
  render() {
    const {
      values: { occupation, income }
    } = this.props;

    let liquidCard = (income > 16000) ? true : false;
    let studentCard = (occupation === "Student") ? true : false;

    let credit;

    if (liquidCard && studentCard) {
      credit = 4500;
    }
    else if (liquidCard) {
      credit = 3300;
    }
    else if (studentCard) {
      credit = 1500;
    }
    else {
      credit = 300;
    }

    return (
      <MuiThemeProvider >
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
                    £
                  </Avatar>
                }
                title="The total amount of credit available: "
                subheader={credit}
              />
            </Card>
          </Dialog>
        </React.Fragment >
      </MuiThemeProvider >
    );
  }
}

export default Success;

