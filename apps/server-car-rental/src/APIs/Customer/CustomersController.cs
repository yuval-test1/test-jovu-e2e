using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[ApiController]
public class CustomersController : CustomersControllerBase
{
    public CustomersController(ICustomersService service)
        : base(service) { }
}
