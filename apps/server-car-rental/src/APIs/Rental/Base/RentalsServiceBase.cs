using System.ComponentModel.DataAnnotations;
using System.IO.Compression;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using CarRentalService.APIs.Extensions;
using CarRentalService.Infrastructure;
using CarRentalService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalService.APIs;

public abstract class RentalsServiceBase : IRentalsService
{
    protected readonly CarRentalServiceContext _context;

    public RentalsServiceBase(CarRentalServiceContext context)
    {
        _context = context;
    }

    private bool RentalExists(long id)
    {
        return _context.Rentals.Any(e => e.Id == id);
    }

    public async Task<RentalDto> CreateRental(RentalCreateInput inputDto)
    {
        var model = new Rental { Id = inputDto.Id, Name = inputDto.Name, };
        _context.rentals.Add(model);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<Rental>(model.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    public async Task DeleteRental(string id)
    {
        var rental = await _context.rentals.FindAsync(id);

        if (rental == null)
        {
            throw new NotFoundException();
        }

        _context.rentals.Remove(rental);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<RentalDto>> rentals(RentalFindMany findManyArgs)
    {
        var rentals = await _context
            .rentals.ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();

        return rentals.ConvertAll(rental => rental.ToDto());
    }

    public async Task ConnectCar(string id, [Required] string carId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var car = await _context.cars.FindAsync(carId);
        if (car == null)
        {
            throw new NotFoundException();
        }

        rental.cars.Add(car);
        await _context.SaveChangesAsync();
    }

    public async Task ConnectCustomer(string id, [Required] string customerId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var customer = await _context.customers.FindAsync(customerId);
        if (customer == null)
        {
            throw new NotFoundException();
        }

        rental.customers.Add(customer);
        await _context.SaveChangesAsync();
    }

    public async Task ConnectFeedback(string id, [Required] string feedbackId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var feedback = await _context.feedbacks.FindAsync(feedbackId);
        if (feedback == null)
        {
            throw new NotFoundException();
        }

        rental.feedbacks.Add(feedback);
        await _context.SaveChangesAsync();
    }

    public async Task DisconnectCar(string id, [Required] string carId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var car = await _context.cars.FindAsync(carId);
        if (car == null)
        {
            throw new NotFoundException();
        }

        rental.cars.Remove(car);
        await _context.SaveChangesAsync();
    }

    public async Task DisconnectCustomer(string id, [Required] string customerId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var customer = await _context.customers.FindAsync(customerId);
        if (customer == null)
        {
            throw new NotFoundException();
        }

        rental.customers.Remove(customer);
        await _context.SaveChangesAsync();
    }

    public async Task DisconnectFeedback(string id, [Required] string feedbackId)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var feedback = await _context.feedbacks.FindAsync(feedbackId);
        if (feedback == null)
        {
            throw new NotFoundException();
        }

        rental.feedbacks.Remove(feedback);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<CarDto>> Cars(string id)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        return rental.Cars.Select(car => car.ToDto()).ToList();
    }

    public async Task<IEnumerable<CustomerDto>> Customers(string id)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        return rental.Customers.Select(customer => customer.ToDto()).ToList();
    }

    public async Task<IEnumerable<FeedbackDto>> Feedbacks(string id)
    {
        var rental = await _context.rentals.FindAsync(id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        return rental.Feedbacks.Select(feedback => feedback.ToDto()).ToList();
    }

    public async Task UpdateCars(RentalIdDto idDto, CarIdDto[] carsId)
    {
        var rental = await _context
            .rentals.Include(x => x.Cars)
            .FirstOrDefaultAsync(x => x.Id == idDto.Id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var cars = await _context
            .Cars.Where(t => carsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (cars.Count == 0)
        {
            throw new NotFoundException();
        }

        rental.Cars = cars;
        await _context.SaveChangesAsync();
    }

    public async Task UpdateCustomers(RentalIdDto idDto, CustomerIdDto[] customersId)
    {
        var rental = await _context
            .rentals.Include(x => x.Customers)
            .FirstOrDefaultAsync(x => x.Id == idDto.Id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var customers = await _context
            .Customers.Where(t => customersId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (customers.Count == 0)
        {
            throw new NotFoundException();
        }

        rental.Customers = customers;
        await _context.SaveChangesAsync();
    }

    public async Task UpdateFeedbacks(RentalIdDto idDto, FeedbackIdDto[] feedbacksId)
    {
        var rental = await _context
            .rentals.Include(x => x.Feedbacks)
            .FirstOrDefaultAsync(x => x.Id == idDto.Id);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        var feedbacks = await _context
            .Feedbacks.Where(t => feedbacksId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (feedbacks.Count == 0)
        {
            throw new NotFoundException();
        }

        rental.Feedbacks = feedbacks;
        await _context.SaveChangesAsync();
    }

    public async Task UpdateRental(string id, RentalDto rentalDto)
    {
        var rental = new Rental { Id = rentalDto.Id, Name = rentalDto.Name, };

        _context.Entry(rental).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RentalExists(id))
            {
                throw new NotFoundException();
            }
            else
            {
                throw;
            }
        }
    }
}
