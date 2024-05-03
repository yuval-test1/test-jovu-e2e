using CarRentalService.Infrastructure;

namespace CarRentalService.APIs;

public class FeedbacksService : FeedbacksServiceBase
{
    public FeedbacksService(CarRentalServiceContext context)
        : base(context) { }
}
