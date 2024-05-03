using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[Route("api/[controller]")]
[ApiController]
public class RentalsControllerBase : ControllerBase
{
    protected readonly IRentalsService _service;

    public RentalsControllerBase(IRentalsService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<ActionResult<RentalDto>> CreateRental(RentalCreateInput input)
    {
        var dto = await _service.CreateRental(input);
        return CreatedAtAction(nameof(Rental), new { id = dto.Id }, dto);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRental(string id)
    {
        try
        {
            await _service.DeleteRental(id);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<RentalDto>>> Rentals()
    {
        return Ok(await _service.rentals());
    }

    [HttpPost("{id}/cars")]
    public async Task<IActionResult> ConnectRental(string id, [Required] string CarId)
    {
        try
        {
            await _service.ConnectCar(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpPost("{id}/customers")]
    public async Task<IActionResult> ConnectRental(string id, [Required] string CustomerId)
    {
        try
        {
            await _service.ConnectCustomer(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpPost("{id}/feedbacks")]
    public async Task<IActionResult> ConnectRental(string id, [Required] string FeedbackId)
    {
        try
        {
            await _service.ConnectFeedback(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}/cars")]
    public async Task<IActionResult> DisconnectRental(string id, [Required] string CarId)
    {
        try
        {
            await _service.DisconnectCar(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}/customers")]
    public async Task<IActionResult> DisconnectRental(string id, [Required] string CustomerId)
    {
        try
        {
            await _service.DisconnectCustomer(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}/feedbacks")]
    public async Task<IActionResult> DisconnectRental(string id, [Required] string FeedbackId)
    {
        try
        {
            await _service.DisconnectFeedback(id, RentalId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet("{id}/cars")]
    public async Task<IActionResult> Cars(string id)
    {
        try
        {
            return Ok(await _service.Cars(id));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpGet("{id}/customers")]
    public async Task<IActionResult> Customers(string id)
    {
        try
        {
            return Ok(await _service.Customers(id));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpGet("{id}/feedbacks")]
    public async Task<IActionResult> Feedbacks(string id)
    {
        try
        {
            return Ok(await _service.Feedbacks(id));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPatch("{id}/cars")]
    public async Task<IActionResult> UpdateCar(
        [FromRoute] RentalIdDto idDto,
        [FromBody] CarIdDto[] carIds
    )
    {
        try
        {
            await _service.UpdateCar(id, CarId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpPatch("{id}/customers")]
    public async Task<IActionResult> UpdateCustomer(
        [FromRoute] RentalIdDto idDto,
        [FromBody] CustomerIdDto[] customerIds
    )
    {
        try
        {
            await _service.UpdateCustomer(id, CustomerId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpPatch("{id}/feedbacks")]
    public async Task<IActionResult> UpdateFeedback(
        [FromRoute] RentalIdDto idDto,
        [FromBody] FeedbackIdDto[] feedbackIds
    )
    {
        try
        {
            await _service.UpdateFeedback(id, FeedbackId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateRental(string id, RentalDto rentalDto)
    {
        if (id != rentalDto.Id)
        {
            return BadRequest();
        }

        try
        {
            await _service.UpdateRental(id, rentalDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }
}
