using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;

namespace CarRentalService.APIs;

public interface ICarsService
{
    public Task ConnectRental(string id, [Required] string RentalId);
    public Task DisconnectRental(string id, [Required] string RentalId);
    public Task<IEnumerable<Rental>> Rentals(string id);
    public Task UpdateRentals(CarIdDto idDto, RentalIdDto[] RentalsId);
    public Task<Car> CreateCar(CarCreateInput input);
    public Task DeleteCar(string id);
    public Task<IEnumerable<Car>> Cars();
    public Task UpdateCar(string id, Car dto);
}
