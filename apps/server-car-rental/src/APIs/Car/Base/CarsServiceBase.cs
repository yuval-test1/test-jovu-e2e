using System.ComponentModel.DataAnnotations;
using System.IO.Compression;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using CarRentalService.APIs.Extensions;
using CarRentalService.Infrastructure;
using CarRentalService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalService.APIs;

public abstract class CarsServiceBase : ICarsService
{
    protected readonly CarRentalServiceContext _context;

    public CarsServiceBase(CarRentalServiceContext context)
    {
        _context = context;
    }

    private bool CarExists(long id)
    {
        return _context.Cars.Any(e => e.Id == id);
    }

    public async Task ConnectRental(string id, [Required] string rentalId)
    {
        var car = await _context.cars.FindAsync(id);
        if (car == null)
        {
            throw new NotFoundException();
        }

        var rental = await _context.rentals.FindAsync(rentalId);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        car.rentals.Add(rental);
        await _context.SaveChangesAsync();
    }

    public async Task DisconnectRental(string id, [Required] string rentalId)
    {
        var car = await _context.cars.FindAsync(id);
        if (car == null)
        {
            throw new NotFoundException();
        }

        var rental = await _context.rentals.FindAsync(rentalId);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        car.rentals.Remove(rental);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<RentalDto>> Rentals(string id)
    {
        var car = await _context.cars.FindAsync(id);
        if (car == null)
        {
            throw new NotFoundException();
        }

        return car.Rentals.Select(rental => rental.ToDto()).ToList();
    }

    public async Task UpdateRentals(CarIdDto idDto, RentalIdDto[] rentalsId)
    {
        var car = await _context
            .cars.Include(x => x.Rentals)
            .FirstOrDefaultAsync(x => x.Id == idDto.Id);
        if (car == null)
        {
            throw new NotFoundException();
        }

        var rentals = await _context
            .Rentals.Where(t => rentalsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (rentals.Count == 0)
        {
            throw new NotFoundException();
        }

        car.Rentals = rentals;
        await _context.SaveChangesAsync();
    }

    public async Task<CarDto> CreateCar(CarCreateInput inputDto)
    {
        var model = new Car { Id = inputDto.Id, Name = inputDto.Name, };
        _context.cars.Add(model);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<Car>(model.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    public async Task DeleteCar(string id)
    {
        var car = await _context.cars.FindAsync(id);

        if (car == null)
        {
            throw new NotFoundException();
        }

        _context.cars.Remove(car);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<CarDto>> cars(CarFindMany findManyArgs)
    {
        var cars = await _context
            .cars.ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();

        return cars.ConvertAll(car => car.ToDto());
    }

    public async Task UpdateCar(string id, CarDto carDto)
    {
        var car = new Car { Id = carDto.Id, Name = carDto.Name, };

        _context.Entry(car).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CarExists(id))
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
