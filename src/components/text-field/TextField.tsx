import { Box, InputBase as MUIInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Typography } from "@mui/material";

interface TextFieldProps {
  placeholder: string;
  icon?: JSX.Element;
  error?: string;
  type?: string | "text";
  value: string | "";
  setValue: (value: string) => void;
}

const TextField = ({
  placeholder,
  icon,
  error,
  type,
  value,
  setValue,
}: TextFieldProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <MUIInput
        type={type}
        value={value}
        onChange={(e) => {
          if (setValue) setValue(e.target.value);
        }}
        sx={{
          borderRadius: "4px",
          border: "1px solid #B5BBC8",
          background: "white",
          padding: "5px 10px",
          height: "48px",
          "&.Mui-focused": {
            borderWidth: "2px",
            backgroundColor: "white",
          },
        }}
        placeholder={placeholder}
        startAdornment={
          icon ? <InputAdornment position="start">{icon}</InputAdornment> : ""
        }
      />
      {error ? (
        <Typography sx={{ color: "error.main" }}>{error}</Typography>
      ) : null}
    </Box>
  );
};

export default TextField;
