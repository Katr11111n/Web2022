using Microsoft.AspNetCore.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class CustomerController : Controller
    {
        public ActionResult List()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "List";
            return View("ActionName");
        }

        public ActionResult Index()
        {
            ViewBag.Controller = "Customer";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
    }
}