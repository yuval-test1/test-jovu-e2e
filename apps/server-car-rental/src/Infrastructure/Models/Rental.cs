using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalService.Infrastructure.Models;

[Table("Rentals")]
public class Rental
{
    [Key, Required]
    public long Id { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }

    public decimal? TotalPrice { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public string CarId { get; set; }

    [ForeignKey(nameof(CarId))]
    public Car? Car { get; set; }

    public string CustomerId { get; set; }

    [ForeignKey(nameof(CustomerId))]
    public Customer? Customer { get; set; }

    public ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();
}
