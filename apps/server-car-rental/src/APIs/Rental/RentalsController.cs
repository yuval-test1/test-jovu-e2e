using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[ApiController]
public class RentalsController : RentalsControllerBase
{
    public RentalsController(IRentalsService service)
        : base(service) { }
}
