import { getAllStudents, getStudentById, createStudent, deleteStudent  } from '../services/students.js';
import createHttpError from 'http-errors';

export const getStudentsController = async (
  req,
  res,
	next,
) => {
	try {
	  const students = await getAllStudents();

	  res.json({
	    status: 200,
	    message: 'Successfully found students!',
	    data: students,
	  });
	} catch(err) {
		next(err);
	}
};

export const getStudentByIdController = async (req, res, next) => {
    const { studentId } = req.params;
    const student = await getStudentById(studentId);

    // Відповідь, якщо контакт не знайдено
    if (!student) {
      throw createHttpError(404, 'Student not found');
    }


    // Відповідь, якщо контакт знайдено
    res.json({
        status: 200,
        message: `Successfully found student with id ${studentId}!`,
        data: student,
    });
}

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: student,
  });
};

export const deleteStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await deleteStudent(studentId);

  if (!student) {
    next(createHttpError(404, 'Student not found'));
    return;
  }

  res.status(204).send();
};
