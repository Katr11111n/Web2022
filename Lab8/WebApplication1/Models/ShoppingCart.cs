using System.Collections.Generic;
using WebApplication1.Controllers;

namespace EssentialTools.Models
{
    public class ShoppingCart
    {
        private IValueCalculator calc;
        private LinqValueCalculator calc1;

        public ShoppingCart(IValueCalculator calcParam)
        {
            calc = calcParam;
        }

        public ShoppingCart(LinqValueCalculator calc1)
        {
            this.calc1 = calc1;
        }

        public IEnumerable<Product> Products { get; set; }

        public decimal CalculateProductTotal()
        {
            return calc.ValueProducts(Products);
        }
    }
}