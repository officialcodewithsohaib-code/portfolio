import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { title } from 'motion/react-m'

function Grid() {
  return (
    <section id='about'>
      {/* <BentoGrid>
        {[
            {title:'Title 1',description:'Description for item 1',id:1},
            {title:'Title 1',description:'Description for item 1',id:1},
            {title:'Title 1',description:'Description for item 1',id:1}
        
        ].map((item) => (
            <BentoGridItem id={item.id} key={item.id} title={item.title}
            description={item.description}/>
        ))}
      </BentoGrid> */}
    </section>
  )
}

export default Grid
