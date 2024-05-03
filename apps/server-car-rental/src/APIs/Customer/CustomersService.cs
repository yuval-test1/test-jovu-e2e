using CarRentalService.Infrastructure;

namespace CarRentalService.APIs;

public class CustomersService : CustomersServiceBase
{
    public CustomersService(CarRentalServiceContext context)
        : base(context) { }
}
