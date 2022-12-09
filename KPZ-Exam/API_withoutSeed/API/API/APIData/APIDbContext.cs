using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.APIData
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Medicine> Medicines { get; set; }
    }
}
