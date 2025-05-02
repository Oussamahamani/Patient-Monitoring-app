namespace Patient.DB;

 public record Patient 
 {
   public string ? Name { get; set; }
   public string ? Id { get; set; }
   public int ? Age { get; set; }
   public string ? Gender { get; set; }
   public string ? BloodType { get; set; }
   public string ? Admission { get; set; }
   public string ? Doctor { get; set; }
   public string[] ? Medications { get; set; }
   
 }

 public class PatientDB
 {

   public static Patient GetPatient() 
   {
    string[] medications = { "Metoprolol 50mg", "Atorvastatin 20mg", "Aspirin 81mg" };
    Patient patient = new() { 
        Name = "mark",
        Id="Adam Smith",
        Age= 42,
        Gender = "Male",
        BloodType = "O+",
        Admission = "2025-04-28",
        Doctor = "Dr. Sarah Chen",
        Medications = medications
        };
     return patient;
   } 



   
 }