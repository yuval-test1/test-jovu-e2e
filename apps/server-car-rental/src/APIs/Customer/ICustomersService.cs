using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;

namespace CarRentalService.APIs;

public interface ICustomersService
{
    public Task<Customer> CreateCustomer(CustomerCreateInput input);
    public Task ConnectRental(string id, [Required] string RentalId);
    public Task DisconnectRental(string id, [Required] string RentalId);
    public Task<IEnumerable<Rental>> Rentals(string id);
    public Task UpdateRentals(CustomerIdDto idDto, RentalIdDto[] RentalsId);
    public Task DeleteCustomer(string id);
    public Task<IEnumerable<Customer>> Customers();
    public Task UpdateCustomer(string id, Customer dto);
}
