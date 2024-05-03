using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[ApiController]
public class CarsController : CarsControllerBase
{
    public CarsController(ICarsService service)
        : base(service) { }
}
