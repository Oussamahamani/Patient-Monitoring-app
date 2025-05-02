import React from "react";
import styles from "./PatientCard.module.css"; // Assuming you have some styles in PatientCard.module.css
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import PersonIcon from '@mui/icons-material/Person';

const PatientCard = ({patientData}) => {
  // const patientData = {
  //   name: "Adam Smith",
  //   id: "PT-4872",
  //   age: 42,
  //   gender: "Male",
  //   bloodType: "O+",
  //   admissionDate: "2025-04-28",
  //   primaryDoctor: "Dr. Sarah Chen",
  //   medications: ["Metoprolol 50mg", "Atorvastatin 20mg", "Aspirin 81mg"],
  // };

  return (
    <div className={styles.container}>
      <Typography variant="h6" sx={{display: 'flex', alignItems: 'center'}}>
       <PersonIcon/> Patient Information
      </Typography>
      <div className={styles.infoContainer}>
        <Typography variant="body1" className={styles.info}>
          Name: <strong>{patientData.name}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          ID: <strong>{patientData.id}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Age: <strong>{patientData.age}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Gender: <strong>{patientData.gender}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Blood Type: <strong>{patientData.bloodType}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Admission Date: <strong>{patientData.admission}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Doctor: <strong>{patientData.doctor}</strong>
        </Typography>
      </div>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <div className={styles.medicationsContainer}>
        <Typography variant="body1">
          <strong>Medications:</strong>
        </Typography>
        <ul className={styles.medicationList}>
          {patientData.medications.map((medication, index) => (
            <li key={index}>{medication}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientCard;
