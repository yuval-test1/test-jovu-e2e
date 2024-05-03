using System.ComponentModel.DataAnnotations;
using CarRentalService.APIs.Dtos;

namespace CarRentalService.APIs;

public interface IFeedbacksService
{
    public Task<Feedback> CreateFeedback(FeedbackCreateInput input);
    public Task DeleteFeedback(string id);
    public Task<IEnumerable<Rental>> Rentals(string id);
    public Task<IEnumerable<Feedback>> Feedbacks();
    public Task UpdateFeedback(string id, Feedback dto);
}
