using System.ComponentModel.DataAnnotations;
using System.IO.Compression;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using CarRentalService.APIs.Extensions;
using CarRentalService.Infrastructure;
using CarRentalService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalService.APIs;

public abstract class CustomersServiceBase : ICustomersService
{
    protected readonly CarRentalServiceContext _context;

    public CustomersServiceBase(CarRentalServiceContext context)
    {
        _context = context;
    }

    private bool CustomerExists(long id)
    {
        return _context.Customers.Any(e => e.Id == id);
    }

    public async Task<CustomerDto> CreateCustomer(CustomerCreateInput inputDto)
    {
        var model = new Customer { Id = inputDto.Id, Name = inputDto.Name, };
        _context.customers.Add(model);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<Customer>(model.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    public async Task ConnectRental(string id, [Required] string rentalId)
    {
        var customer = await _context.customers.FindAsync(id);
        if (customer == null)
        {
            throw new NotFoundException();
        }

        var rental = await _context.rentals.FindAsync(rentalId);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        customer.rentals.Add(rental);
        await _context.SaveChangesAsync();
    }

    public async Task DisconnectRental(string id, [Required] string rentalId)
    {
        var customer = await _context.customers.FindAsync(id);
        if (customer == null)
        {
            throw new NotFoundException();
        }

        var rental = await _context.rentals.FindAsync(rentalId);
        if (rental == null)
        {
            throw new NotFoundException();
        }

        customer.rentals.Remove(rental);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<RentalDto>> Rentals(string id)
    {
        var customer = await _context.customers.FindAsync(id);
        if (customer == null)
        {
            throw new NotFoundException();
        }

        return customer.Rentals.Select(rental => rental.ToDto()).ToList();
    }

    public async Task UpdateRentals(CustomerIdDto idDto, RentalIdDto[] rentalsId)
    {
        var customer = await _context
            .customers.Include(x => x.Rentals)
            .FirstOrDefaultAsync(x => x.Id == idDto.Id);
        if (customer == null)
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

        customer.Rentals = rentals;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteCustomer(string id)
    {
        var customer = await _context.customers.FindAsync(id);

        if (customer == null)
        {
            throw new NotFoundException();
        }

        _context.customers.Remove(customer);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<CustomerDto>> customers(CustomerFindMany findManyArgs)
    {
        var customers = await _context
            .customers.ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();

        return customers.ConvertAll(customer => customer.ToDto());
    }

    public async Task UpdateCustomer(string id, CustomerDto customerDto)
    {
        var customer = new Customer { Id = customerDto.Id, Name = customerDto.Name, };

        _context.Entry(customer).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CustomerExists(id))
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
