import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="123"
          name="xyz"
          topic="xyx"
          subject="Science"
          duration={45}
          color="#ff3d21"
        />
        <CompanionCard
          id="123"
          name="xyz"
          topic="xyx"
          subject="Science"
          duration={45}
          color="#ff3d21"
        />
        <CompanionCard
          id="123"
          name="xyz"
          topic="xyx"
          subject="Science"
          duration={45}
          color="#ff3d21"
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>


    </main>
  )
}

export default Page