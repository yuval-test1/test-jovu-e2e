using CarRentalService.APIs.Dtos;
using CarRentalService.Infrastructure.Models;

namespace CarRentalService.APIs.Extensions;

public static class CustomersExtensions
{
    public static CustomerDto ToDto(this Customer model)
    {
        return new CustomerDto
        {
            Id = model.Id,
            CreatedAt = model.CreatedAt,
            UpdatedAt = model.UpdatedAt,
            Rentals = model.Rentals.Select(x => x.ToDto()).ToList(),
            Email = model.Email,
            LicenseNumber = model.LicenseNumber,
            LastName = model.LastName,
            Phone = model.Phone,
            Address = model.Address,
            FirstName = model.FirstName,
        };
    }
}
