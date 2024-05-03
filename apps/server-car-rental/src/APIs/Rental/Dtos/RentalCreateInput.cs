namespace CarRentalService.APIs.Dtos;

public class RentalCreateInput
{
    public DateTime CreatedAt { get; set; }
    public decimal? TotalPrice { get; set; }
    public CarDto CarId { get; set; }
    public CustomerDto CustomerId { get; set; }
    public ICollection<FeedbackDto>? Feedbacks { get; set; }
}
