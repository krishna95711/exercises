import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

// const BodyPart = ({ item, setBodyPart, bodyPart }) => (
//   <Stack
//     type="button"
//     alignItems="center"
//     justifyContent="center"
//     className="bodyPart-card"
//     sx={ bodyPart === item ? { borderTop: "4px solid #FF2625", background: "#222", borderRadius: "20px", width: "270px", height: "282px", cursor: "pointer", gap: "47px" } :{ background: "#222", borderRadius: "20px", width: "270px", height: "282px", cursor: "pointer", gap: "47px" }}
//     onClick={() => {
//       setBodyPart(item);
//       // href = "./Fulldetail";

//       window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
//     }}
//   >
//     <img src={Icon} alt="dumbbell" style={{ width: "200px", height: "90px" }} />{" "}
//     <Typography
//       fontSize="24px"
//       fontWeight="bold"
//       fontFamily="Alegreya"
//       color="#fff"
//       textTransform="capitalize"
//     >
//       {" "}
//       {item}
//     </Typography>
//   </Stack>
// );

// export default BodyPart;

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 900, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
