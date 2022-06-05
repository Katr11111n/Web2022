using EssentialTools.Models;
using System.Collections.Generic;

namespace WebApplication1.Controllers
{
    public interface IValueCalculator
    {
        decimal ValueProducts(IEnumerable<Product> products);
    }
}