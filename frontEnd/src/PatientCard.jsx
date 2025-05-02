import React from "react";
import styles from "./PatientCard.module.css"; // Assuming you have some styles in PatientCard.module.css
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import PersonIcon from '@mui/icons-material/Person';

const PatientCard = () => {
  const patientInfo = {
    name: "Adam Smith",
    id: "PT-4872",
    age: 42,
    gender: "Male",
    bloodType: "O+",
    admissionDate: "2025-04-28",
    primaryDoctor: "Dr. Sarah Chen",
    medications: ["Metoprolol 50mg", "Atorvastatin 20mg", "Aspirin 81mg"],
  };

  return (
    <div className={styles.container}>
      <Typography variant="h6" sx={{display: 'flex', alignItems: 'center'}}>
       <PersonIcon/> Patient Information
      </Typography>
      <div className={styles.infoContainer}>
        <Typography variant="body1" className={styles.info}>
          Name: <strong>{patientInfo.name}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          ID: <strong>{patientInfo.id}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Age: <strong>{patientInfo.age}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Gender: <strong>{patientInfo.gender}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Blood Type: <strong>{patientInfo.bloodType}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Admission Date: <strong>{patientInfo.admissionDate}</strong>
        </Typography>
        <Typography variant="body1" className={styles.info}>
          Doctor: <strong>{patientInfo.primaryDoctor}</strong>
        </Typography>
      </div>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <div className={styles.medicationsContainer}>
        <Typography variant="body1">
          <strong>Medications:</strong>
        </Typography>
        <ul className={styles.medicationList}>
          {patientInfo.medications.map((medication, index) => (
            <li key={index}>{medication}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientCard;
