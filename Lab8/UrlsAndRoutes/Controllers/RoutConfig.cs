using Microsoft.AspNetCore.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class RoutConfig : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
