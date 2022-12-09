using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Medicine
    {
            [Key]
            public Guid Id { get; set; }

            [StringLength(100)]
            public string Name { get; set; }

            [StringLength(100)]
            public string Type { get; set; }

            [Range(0, 99999.99)]
            public double Price { get; set; }

            [Range(0, 1000)]
            public int Quantity { get; set; }

            [StringLength(25)]
            public string withPrescription { get; set; }
    }
}
