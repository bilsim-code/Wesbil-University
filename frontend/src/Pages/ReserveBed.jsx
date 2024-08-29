import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const ReserveBed = () => {
  return (
    <div className="">
      <h2 className="text-black-shade font-bold font-serif pb-10  mb-16">
        RESERVATION
      </h2>
      <div className="grid grid-rows-2 gap-10 609px:grid-rows-1 609px:grid-cols-2">
        <div className="relative mb-10">
          <h2 className="text-sm font-medium absolute -top-6 pb-4 max-270px:-top-10 max-270px:pb-10 bg-white left-2">
            SEMESTER DETAILS
          </h2>
          <ul className="border py-4 px-2 h-[250px] max-270px:h-[400px] rounded flex flex-col gap-[6%]">
            <li>
              <span className="font-medium text-sm">ACADEMIC YEAR: </span>
              <span className="">2024/2025</span>
            </li>
            <li>
              <span className="font-medium text-sm">SEMESTER: </span>
              <span className="">Semester 1</span>
            </li>
            <li>
              <span className="font-medium text-sm">YEAR OF STUDY: </span>
              <span className="">Year 3</span>
            </li>
          </ul>
        </div>

        <div className="relative mb-10">
          <h2 className="text-sm font-medium absolute -top-6 pb-4 max-270px:-top-10 max-270px:pb-10 bg-white left-2">
            RESERVATION DETAILS
          </h2>
          <div className="border py-4 px-2 h-[250px] max-270px:h-[300px] rounded flex flex-col gap-[2%]">
            <div className="px-4 max-footer-md:px-1">
              <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  -- Choose Hostel --
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Hostel"
                >
                  <MenuItem value="">
                    <em>Choose your hostel</em>
                  </MenuItem>
                  <MenuItem value={"A"}>Hostel A</MenuItem>
                  <MenuItem value={"B"}>Hostel B</MenuItem>
                  <MenuItem value={"C"}>Hostel C</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="px-4 max-footer-md:px-1">
              <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  -- Choose Room --
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Room"
                >
                  <MenuItem value="">
                    <em>Choose your room</em>
                  </MenuItem>
                  <MenuItem value={1}>Room 1</MenuItem>
                  <MenuItem value={2}>Room 2</MenuItem>
                  <MenuItem value={3}>Room 3</MenuItem>
                  <MenuItem value={4}>Room 4</MenuItem>
                  <MenuItem value={5}>Room 5</MenuItem>
                  <MenuItem value={6}>Room 6</MenuItem>
                  <MenuItem value={7}>Room 7</MenuItem>
                  <MenuItem value={8}>Room 8</MenuItem>
                  <MenuItem value={9}>Room 9</MenuItem>
                  <MenuItem value={10}>Room 10</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="px-4 max-footer-md:px-1">
              <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  -- Choose Bed --
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Hostel"
                >
                  <MenuItem value="">
                    <em>Choose your bed</em>
                  </MenuItem>
                  <MenuItem value={1}>Bed 1</MenuItem>
                  <MenuItem value={2}>Bed 2</MenuItem>
                  <MenuItem value={3}>Bed 3</MenuItem>
                  <MenuItem value={4}>Bed 4</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mt-4 grid 600px:w-1/2 mx-auto">
              <Button variant="contained">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveBed;
