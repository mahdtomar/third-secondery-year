import React from 'react'
import IntroPage from './IntroPage'
import MainLessonsPage from './MainLessonsPage'
import '../sass/LessonPage.css'
import '../App.css'
function MainPage() {
  return (
    <div>
        {/* <IntroPage/> */}
        <MainLessonsPage/>
    </div>
  )
}

export default MainPage