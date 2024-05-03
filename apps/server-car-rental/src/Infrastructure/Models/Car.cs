using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalService.Infrastructure.Models;

[Table("Cars")]
public class Car
{
    [Key, Required]
    public long Id { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }

    public ICollection<Rental> Rentals { get; set; } = new List<Rental>();

    public decimal? RentalPricePerDay { get; set; }

    public OptionSet? Status { get; set; }

    public string? RegistrationNumber { get; set; }

    public string? Make { get; set; }

    public string? Model { get; set; }
}
