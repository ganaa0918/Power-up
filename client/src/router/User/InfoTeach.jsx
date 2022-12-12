import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Img from './teacherinf.png'

function InfoTeach() {
  return (
    <div>
         <div className='flex'>

        <Sidebar />
        <div className='container'style={{paddingTop:"100px",}} >
        <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">
    <img src={Img} alt="ss" />
    <div>
      <h3>Name</h3>
      <p>Fabian Levy</p>
    </div>
    <div>
      <h3>Age</h3>
      <p>23 years old</p>
    </div>
    <div>
      <h3>Occupation</h3>
      <p>Teacher</p>
    </div>
    <div>
      <h3>Hobbies</h3>
      <p>Rock climbig, board games.</p>
    </div>

  </div>
  <div class="col-span-2 ...">
    <h3>Profile</h3>
    <p>Fabian's lifestyle is quite active. He works out three times a week. His fitness routine is a healthy mix of strength-training and cardio. Apart from fitness, his priority is a healthy and balanced diet. He have some sort of a meal plan, but he is quite fliexible with it.
He prefers to do shopping online because it is convenient and less time-consuming, as he can do it whenever it suits him.</p>
  </div>
  <div class="row-span-2 col-span-2 ...">
    <h3>Personality</h3>
    <p>He is independent, curious and passionate. When he is caught up in something exciting and interesting, he can leave everything else behind.</p>
  </div>
</div>
        </div>
        </div>
    </div>
  )
}

export default InfoTeach