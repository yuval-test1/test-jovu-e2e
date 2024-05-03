using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;
using CarRentalService.APIs.Errors;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[Route("api/[controller]")]
[ApiController]
public class CarsControllerBase : ControllerBase
{
    protected readonly ICarsService _service;

    public CarsControllerBase(ICarsService service)
    {
        _service = service;
    }

    [HttpPost("{id}/rentals")]
    public async Task<IActionResult> ConnectCar(string id, [Required] string RentalId)
    {
        try
        {
            await _service.ConnectRental(id, CarId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}/rentals")]
    public async Task<IActionResult> DisconnectCar(string id, [Required] string RentalId)
    {
        try
        {
            await _service.DisconnectRental(id, CarId);
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
        [FromRoute] CarIdDto idDto,
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

    [HttpPost]
    public async Task<ActionResult<CarDto>> CreateCar(CarCreateInput input)
    {
        var dto = await _service.CreateCar(input);
        return CreatedAtAction(nameof(Car), new { id = dto.Id }, dto);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCar(string id)
    {
        try
        {
            await _service.DeleteCar(id);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CarDto>>> Cars()
    {
        return Ok(await _service.cars());
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateCar(string id, CarDto carDto)
    {
        if (id != carDto.Id)
        {
            return BadRequest();
        }

        try
        {
            await _service.UpdateCar(id, carDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }
}
