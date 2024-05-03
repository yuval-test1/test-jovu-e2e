using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs;

[ApiController]
public class FeedbacksController : FeedbacksControllerBase
{
    public FeedbacksController(IFeedbacksService service)
        : base(service) { }
}
