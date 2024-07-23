import express from 'express';
import StudentsController from '../controllers/StudentController';
import AppController from '../controllers/AppController';

const router = express.Router();

const studentController = new StudentsController();
const appController = new AppController();

router.get('/', (req, res) => appController.getHomepage(req, res));
router.get('/students', (req, res) => studentController.getAllStudents(req, res));
router.get('/students/:major', (req, res) => studentController.getAllStudentsByMajor(req, res));

export default router;
