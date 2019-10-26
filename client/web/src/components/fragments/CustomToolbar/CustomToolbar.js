import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const defaultToolbarStyles = {
    iconButton: {
    },
};

class CustomToolbar extends React.Component {
    
    handleClick = () => {
        const history = useHistory();

        history.push(this.props.addPath);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Tooltip title={"Adicionar"}>
                <IconButton className={classes.iconButton} onClick={this.handleClick}>
                    <AddIcon className={classes.deleteIcon} />
                </IconButton>
                </Tooltip>
            </React.Fragment>
        );
    }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);