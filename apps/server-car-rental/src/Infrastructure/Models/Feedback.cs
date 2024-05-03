using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalService.Infrastructure.Models;

[Table("Feedbacks")]
public class Feedback
{
    [Key, Required]
    public long Id { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }

    public string? Comments { get; set; }

    public string? Rating { get; set; }

    public string RentalId { get; set; }

    [ForeignKey(nameof(RentalId))]
    public Rental? Rental { get; set; }
}
