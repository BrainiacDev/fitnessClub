import React, { useState } from 'react'
import { Box } from '@mui/material'

import Exercises from '../component/Exercises';
import SearchExercises from '../component/SearchExercises';
import HeroBanner from '../component/HeroBanner'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    console.log(bodyPart)

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Home