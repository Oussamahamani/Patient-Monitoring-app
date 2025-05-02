namespace Patient.DB;

 public record Patient 
 {
   public string ? Name { get; set; }
   public string ? Id { get; set; }
   
 }

 public class PatientDB
 {

   public static Patient GetPatient() 
   {
    Patient patient = new() { Name = "mark",Id="Adam Smith"};
     return patient;
   } 



   
 }