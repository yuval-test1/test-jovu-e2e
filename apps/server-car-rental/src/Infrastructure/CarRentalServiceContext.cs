using CarRentalService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalService.Infrastructure;

public class CarRentalServiceContext : DbContext
{
    public CarRentalServiceContext(DbContextOptions<CarRentalServiceContext> options)
        : base(options) { }

    public DbSet<Car> Cars { get; set; } = null!;
    public DbSet<Feedback> Feedbacks { get; set; } = null!;
    public DbSet<Rental> Rentals { get; set; } = null!;
    public DbSet<Customer> Customers { get; set; } = null!;
}
