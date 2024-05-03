using CarRentalService.APIs.Dtos;
using CarRentalService.Infrastructure.Models;

namespace CarRentalService.APIs.Extensions;

public static class FeedbacksExtensions
{
    public static FeedbackDto ToDto(this Feedback model)
    {
        return new FeedbackDto
        {
            Id = model.Id,
            CreatedAt = model.CreatedAt,
            UpdatedAt = model.UpdatedAt,
            Comments = model.Comments,
            Rating = model.Rating,
            Rentals = model.Rentals.Select(x => x.ToDto()).ToList(),
        };
    }
}
