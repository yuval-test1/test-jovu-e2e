namespace CarRentalService.APIs.Dtos;

public class FeedbackWhereInput
{
    public DateTime CreatedAt { get; set; }
    public string? Rating { get; set; }
    public RentalDto RentalId { get; set; }
}
