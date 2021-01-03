import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { format } from "fecha";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 170,
  },
}));

function DateTimePicker({ timeSpace, onChange, ...rest }) {
  const classes = useStyles();

  const handleIntervalChange = (event, type) => {
    onChange({
      ...timeSpace,
      [type]: new Date(event.target.value).getTime(),
    });
  };

  return (
    <div {...rest} className={classes.container + " " + rest.className}>
      <TextField
        id="datetime-local-from"
        label="From"
        type="datetime-local"
        className={classes.textField}
        value={timeSpace.from && format(timeSpace.from, "YYYY-MM-DD[T]hh:mm")}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => handleIntervalChange(event, "from")}
      />
      <TextField
        id="datetime-local-to"
        label="To"
        type="datetime-local"
        value={timeSpace.to && format(timeSpace.to, "YYYY-MM-DD[T]hh:mm")}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => handleIntervalChange(event, "to")}
      />
    </div>
  );
}

DateTimePicker.propTypes = {
  onChange: PropTypes.func,
};

export default DateTimePicker;
