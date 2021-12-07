import { Modal, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * Use "center" option if modal has smaller width than default from breakpoints
   */
  center?: boolean;
}

const centerBodyStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ModalBase: React.FC<ModalBaseProps> = ({
  isOpen,
  onClose,
  children,
  style,
  center,
}) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.root}
      open={isOpen}
      onClose={onClose}
      style={style}
    >
      <Box
        className={classes.body}
        style={center ? centerBodyStyle : undefined}
      >
        {children}
      </Box>
    </Modal>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    outline: "none",
  },
}));

export default ModalBase;
