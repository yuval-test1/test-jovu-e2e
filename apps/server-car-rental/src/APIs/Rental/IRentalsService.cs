using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;

namespace CarRentalService.APIs;

public interface IRentalsService
{
    public Task<Rental> CreateRental(RentalCreateInput input);
    public Task DeleteRental(string id);
    public Task<IEnumerable<Rental>> Rentals();
    public Task ConnectCar(string id, [Required] string CarId);
    public Task ConnectCustomer(string id, [Required] string CustomerId);
    public Task ConnectFeedback(string id, [Required] string FeedbackId);
    public Task DisconnectCar(string id, [Required] string CarId);
    public Task DisconnectCustomer(string id, [Required] string CustomerId);
    public Task DisconnectFeedback(string id, [Required] string FeedbackId);
    public Task<IEnumerable<Car>> Cars(string id);
    public Task<IEnumerable<Customer>> Customers(string id);
    public Task<IEnumerable<Feedback>> Feedbacks(string id);
    public Task<IEnumerable<Car>> Cars(string id);
    public Task<IEnumerable<Customer>> Customers(string id);
    public Task<IEnumerable<Feedback>> Feedbacks(string id);
    public Task<IEnumerable<Car>> Cars(string id);
    public Task<IEnumerable<Customer>> Customers(string id);
    public Task<IEnumerable<Feedback>> Feedbacks(string id);
    public Task UpdateCars(RentalIdDto idDto, CarIdDto[] CarsId);
    public Task UpdateCustomers(RentalIdDto idDto, CustomerIdDto[] CustomersId);
    public Task UpdateFeedbacks(RentalIdDto idDto, FeedbackIdDto[] FeedbacksId);
    public Task UpdateRental(string id, Rental dto);
}
