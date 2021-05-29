using API.Contexts;
using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class StudentService :IStudentService
    {
        private readonly ApplicationDbContext _context;

        public StudentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public Student AddStudent(Student student)
        {
            _context.Students.Add(student);
            _context.SaveChanges();
            return student;
        }

        public void DeleteStudent(int Id)
        {
            var employee = _context.Students.FirstOrDefault(x => x.Id == Id);
            if (employee != null)
            {
                _context.Remove(employee);
                _context.SaveChanges();
            }
        }

        public Student GetStudent(int Id)
        {
            return _context.Students.FirstOrDefault(x => x.Id == Id);
        }

        public List<Student> GetStudents()
        {
            return _context.Students.ToList();
        }

        public void UpdateStudent(Student student)
        {
            _context.Students.Update(student);
            _context.SaveChanges();
        }
    }
}
