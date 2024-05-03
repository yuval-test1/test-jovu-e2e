using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[Route("api/[controller]")]
[ApiController]
public class CustomersControllerBase : ControllerBase
{
    protected readonly ICustomersService _service;

    public CustomersControllerBase(ICustomersService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<ActionResult<CustomerDto>> CreateCustomer(CustomerCreateInput input)
    {
        var dto = await _service.CreateCustomer(input);
        return CreatedAtAction(nameof(Customer), new { id = dto.Id }, dto);
    }

    [HttpPost("{id}/rentals")]
    public async Task<IActionResult> ConnectCustomer(string id, [Required] string RentalId)
    {
        try
        {
            await _service.ConnectRental(id, CustomerId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}/rentals")]
    public async Task<IActionResult> DisconnectCustomer(string id, [Required] string RentalId)
    {
        try
        {
            await _service.DisconnectRental(id, CustomerId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet("{id}/rentals")]
    public async Task<IActionResult> Rentals(string id)
    {
        try
        {
            return Ok(await _service.Rentals(id));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPatch("{id}/rentals")]
    public async Task<IActionResult> UpdateRental(
        [FromRoute] CustomerIdDto idDto,
        [FromBody] RentalIdDto[] rentalIds
    )
    {
        try
        {
            await _service.UpdateRental(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCustomer(string id)
    {
        try
        {
            await _service.DeleteCustomer(id);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CustomerDto>>> Customers()
    {
        return Ok(await _service.customers());
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateCustomer(string id, CustomerDto customerDto)
    {
        if (id != customerDto.Id)
        {
            return BadRequest();
        }

        try
        {
            await _service.UpdateCustomer(id, customerDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }
}
