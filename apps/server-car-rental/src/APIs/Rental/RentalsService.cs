using CarRentalService.Infrastructure;

namespace CarRentalService.APIs;

public class RentalsService : RentalsServiceBase
{
    public RentalsService(CarRentalServiceContext context)
        : base(context) { }
}
