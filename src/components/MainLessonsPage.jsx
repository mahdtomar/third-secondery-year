import React from 'react'
import ContentPage from './ContentPage'
import LessonNavBar from './LessonNavBar'
import LessonsFooter from './LessonsFooter'

const MainLessonsPage = (props) => {
  return (
    <main>
        <LessonNavBar subjectName={props.subjectName}/>
        <ContentPage />
        <LessonsFooter/>
    </main>
  )
}

export default MainLessonsPage