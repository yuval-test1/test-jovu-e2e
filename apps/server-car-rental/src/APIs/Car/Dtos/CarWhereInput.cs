namespace CarRentalService.APIs.Dtos;

public class CarWhereInput
{
    public DateTime CreatedAt { get; set; }
    public ICollection<RentalDto>? Rentals { get; set; }
    public decimal? RentalPricePerDay { get; set; }
    public string? RegistrationNumber { get; set; }
    public string? Make { get; set; }
    public string? Model { get; set; }
}
