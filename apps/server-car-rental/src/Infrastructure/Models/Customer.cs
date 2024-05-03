using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalService.Infrastructure.Models;

[Table("Customers")]
public class Customer
{
    [Key, Required]
    public long Id { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }

    public ICollection<Rental> Rentals { get; set; } = new List<Rental>();

    public string? Email { get; set; }

    public string? LicenseNumber { get; set; }

    public string? LastName { get; set; }

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public string? FirstName { get; set; }
}
