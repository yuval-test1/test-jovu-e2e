using CarRentalService.APIs.Dtos;
using CarRentalService.Infrastructure.Models;

namespace CarRentalService.APIs.Extensions;

public static class CarsExtensions
{
    public static CarDto ToDto(this Car model)
    {
        return new CarDto
        {
            Id = model.Id,
            CreatedAt = model.CreatedAt,
            UpdatedAt = model.UpdatedAt,
            Rentals = model.Rentals.Select(x => x.ToDto()).ToList(),
            RentalPricePerDay = model.RentalPricePerDay,
            Status = model.Status,
            RegistrationNumber = model.RegistrationNumber,
            Make = model.Make,
            Model = model.Model,
        };
    }
}
