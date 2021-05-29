using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet("GetStudents")]
        public IEnumerable<Student> GetStudents()
        {
            return _studentService.GetStudents();
        }

        [HttpPost("AddStudent")]
        [Authorize(Roles = "Administrator")]
        public IActionResult AddStudent(Student employee)
        {
            _studentService.AddStudent(employee);
            return Ok();
        }

        [HttpPost("UpdateStudent")]
        [Authorize(Roles = "Administrator")]
        public IActionResult UpdateStudent(Student employee)
        {
            _studentService.UpdateStudent(employee);
            return Ok();
        }

        [Authorize(Roles = "Administrator")]
        [HttpDelete("DeleteStudent")]
        public IActionResult DeleteStudent(int id)
        {
            var existingStudent = _studentService.GetStudent(id);
            if (existingStudent != null)
            {
                _studentService.DeleteStudent(existingStudent.Id);
                return Ok();
            }
            return NotFound($"Student Not Found with ID : {existingStudent.Id}");
        }

        [HttpGet("GetStudent")]
        public Student GetStudent(int id)
        {
            return _studentService.GetStudent(id);
        }

    }
}
