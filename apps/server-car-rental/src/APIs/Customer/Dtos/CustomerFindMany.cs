using CarRentalService.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalService.APIs.Dtos;

[BindProperties(SupportsGet = true)]
public class CustomerFindMany : FindManyInput<Customer, CustomerWhereInput> { }
