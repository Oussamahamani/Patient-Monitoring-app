namespace Patient.DB;

public record Patient
{
    public string? Name { get; set; }
    public string? Id { get; set; }
    public int? Age { get; set; }
    public string? Gender { get; set; }
    public string? BloodType { get; set; }
    public string? Admission { get; set; }
    public string? Doctor { get; set; }
    public string[]? Medications { get; set; }
    public List<DateTime> ? Times { get; set; }
    public List<int>? BPMValues { get; set; }


}

public class PatientDB
{

    public static Patient GetPatient()
    {
        List<DateTime> times = [];
        List<int> bpmValues = [];
        Random random = new Random();


        for (int i = 1; i <= 20; i++)
        {
            int seconds = 5 * i;
            DateTime secondsAgo = DateTime.Now - TimeSpan.FromMicroseconds(seconds);
            times.Add(secondsAgo);
            Console.WriteLine("One minute ago: " + secondsAgo);

            int randomBPM = random.Next(70, 80);
            bpmValues.Add(randomBPM);


        }

        string[] medications = ["Metoprolol 50mg", "Atorvastatin 20mg", "Aspirin 81mg"];
        Patient patient = new()
        {
            Name = "mark",
            Id = "Adam Smith",
            Age = 42,
            Gender = "Male",
            BloodType = "O+",
            Admission = "2025-04-28",
            Doctor = "Dr. Sarah Chen",
            Medications = medications,
            Times= times,
            BPMValues=bpmValues,

        };
        return patient;
    }




}