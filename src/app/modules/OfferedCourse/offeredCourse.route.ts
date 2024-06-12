import express from 'express';
import { OfferedCourseControllers } from './offeredCourse.controller';
import validateRequest from '../../middleware/validateRequest';
import { OfferedCourseValidations } from './offeredCourse.validation';

const router = express.Router();

router.post(
  '/create-offered-course',
  validateRequest(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseControllers.createOfferedCourse,
);
router.get(
  '/',

  OfferedCourseControllers.getAllOfferedCourses,
);
router.get('/:id', OfferedCourseControllers.getSingleOfferedCourses);
router.patch(
  '/:id',
  validateRequest(OfferedCourseValidations.updateOfferedCourseValidationSchema),
  OfferedCourseControllers.updateOfferedCourse,
);
router.delete('/:id', OfferedCourseControllers.deleteOfferedCourse);

export const offeredCourseRoutes = router;
