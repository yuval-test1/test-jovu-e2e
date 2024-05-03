using CarRentalService.Infrastructure;

namespace CarRentalService.APIs;

public class CarsService : CarsServiceBase
{
    public CarsService(CarRentalServiceContext context)
        : base(context) { }
}
