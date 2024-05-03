namespace CarRentalService.APIs.Dtos;

public class CustomerCreateInput
{
    public DateTime CreatedAt { get; set; }
    public ICollection<RentalDto>? Rentals { get; set; }
    public string? LicenseNumber { get; set; }
    public string? LastName { get; set; }
    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string? FirstName { get; set; }
}
