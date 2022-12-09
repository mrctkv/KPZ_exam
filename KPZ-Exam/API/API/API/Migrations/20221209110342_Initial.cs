using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Medicines",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Type = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    withPrescription = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medicines", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Medicines",
                columns: new[] { "Id", "Name", "Price", "Quantity", "Type", "withPrescription" },
                values: new object[,]
                {
                    { new Guid("6a5d51fe-a2fd-41eb-ad52-0f6d6fc89615"), "Paracetamol-Darnytsa", 100.0, 100, "Pills", "No" },
                    { new Guid("7d49d3d2-103f-48de-a251-70ece51cc7dc"), "Smth", 980.5, 10, "Liquid", "Yes" },
                    { new Guid("d9a4589f-3f4b-4aa3-9645-6a5816e7170c"), "Ibuprofen", 98.900000000000006, 50, "Pills", "No" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Medicines");
        }
    }
}
