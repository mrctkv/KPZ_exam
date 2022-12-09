using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class APIdbContext : DbContext
    {
        private const string DefaultConnection = "Server=DESKTOP-H1ULBQQ;Database=KPZexam;Trusted_Connection=true;TrustServerCertificate=True";
        public APIdbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Medicine> Medicines { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(DefaultConnection);
             optionsBuilder.UseLazyLoadingProxies();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medicine>().HasData(
                new Medicine
                {
                    Id = Guid.NewGuid(),
                    Name = "Paracetamol-Darnytsa",
                    Type = "Pills",
                    Price = 100.0,
                    Quantity = 100,
                    withPrescription = "No"
                },
                new Medicine
                {
                    Id = Guid.NewGuid(),
                    Name = "Ibuprofen",
                    Type = "Pills",
                    Price = 98.90,
                    Quantity = 50,
                    withPrescription = "No"
                },
                new Medicine
                {
                    Id = Guid.NewGuid(),
                    Name = "Smth",
                    Type = "Liquid",
                    Price = 980.50,
                    Quantity = 10,
                    withPrescription = "Yes"
                }
            );
        }
    }
}
