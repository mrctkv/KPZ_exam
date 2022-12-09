using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineController : Controller
    {
        private readonly APIdbContext _apiDbContext;
        public MedicineController(APIdbContext apiDbContext)
        {
            _apiDbContext = apiDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMedicines()
        {
            var medicines = await _apiDbContext.Medicines.ToListAsync();

            return Ok(medicines);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewMedicine([FromBody] Medicine medicineRequest)
        {
            medicineRequest.Id = Guid.NewGuid();

            await _apiDbContext.Medicines.AddAsync(medicineRequest);
          
            await _apiDbContext.SaveChangesAsync();

            return Ok(medicineRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetMedicine([FromRoute] Guid id)
        {
            var medicine = await _apiDbContext.Medicines.FirstOrDefaultAsync(x => x.Id == id);

            if (medicine == null)
            {
                return NotFound();
            }

            return Ok(medicine);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateItem([FromRoute] Guid id, Medicine updateMedicineRequest)
        {
            var medicine = await _apiDbContext.Medicines.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }
            medicine.Name = updateMedicineRequest.Name;
            medicine.Type = updateMedicineRequest.Type;
            medicine.Price = updateMedicineRequest.Price;
            medicine.Quantity = updateMedicineRequest.Quantity;
            medicine.withPrescription = updateMedicineRequest.withPrescription;

            await _apiDbContext.SaveChangesAsync();

            return Ok(medicine);


        }
        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<ActionResult> DeleteMedicine([FromRoute] Guid id)
        {
            var medicine = await _apiDbContext.Medicines.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }

            _apiDbContext.Medicines.Remove(medicine);
            await _apiDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
