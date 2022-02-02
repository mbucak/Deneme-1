import { Grid, Grow } from '@mui/material';
import React from 'react';
import CourseCard from '../components/CourseCard';
import { coursesMockData } from '../mockdata/courseMock';

export default function CoursesContainer() {


  const courses = coursesMockData;

  return (
    <div>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {
          courses.map((course, i) => {
            return (
              <Grow in
                key={`growkey-${course.id}`}
                style={{ transformOrigin: '0 0 0' }}
              >
                <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={`course-${i}`}>
                  <CourseCard course={course} />
                </Grid>
              </Grow>
            )
          })
        }
      </Grid>
    </div>
  );
}
