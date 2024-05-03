using CarRentalService.APIs.Dtos;
using CarRentalService.Infrastructure.Models;

namespace CarRentalService.APIs.Extensions;

public static class RentalsExtensions
{
    public static RentalDto ToDto(this Rental model)
    {
        return new RentalDto
        {
            Id = model.Id,
            CreatedAt = model.CreatedAt,
            UpdatedAt = model.UpdatedAt,
            TotalPrice = model.TotalPrice,
            StartDate = model.StartDate,
            EndDate = model.EndDate,
            Cars = model.Cars.Select(x => x.ToDto()).ToList(),
            Customers = model.Customers.Select(x => x.ToDto()).ToList(),
            Feedbacks = model.Feedbacks.Select(x => x.ToDto()).ToList(),
        };
    }
}
