import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';

const ranges = [
  {
    value: 'Student',
    label: 'Student',
  },
  {
    value: 'Full Time',
    label: 'Full Time',
  },
  {
    value: 'Part Time',
    label: 'Part Time',
  },
];

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


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  card: {
    padding: '30px'
  }
}));

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment >
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              select
              className={clsx(useStyles.margin, useStyles.textField)}
              variant="filled"
              label="Select Occupation"
              value={values.occupation}
              onChange={handleChange('occupation')}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              className={clsx(useStyles.margin, useStyles.textField)}
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange('dob')}
            />
            <br />
            <TextField
              placeholder="Enter Annual Income"
              label="Annual Income"
              type="number"
              onChange={handleChange('income')}
              defaultValue={values.income}
            />
            <br />
            <TextField
              placeholder="Enter House Number"
              type="number"
              label="House Number"
              onChange={handleChange('houseNumber')}
              defaultValue={values.houseNumber}
            />
            <br />
            <TextField
              placeholder="Enter PostCode"
              label="PostCode"
              onChange={handleChange('postCode')}
              defaultValue={values.postCode}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            <Button
              color="#contained-buttons"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
