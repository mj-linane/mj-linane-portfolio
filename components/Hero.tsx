import { RoughNotationGroup } from 'react-rough-notation'

import RainbowHighlight from '@/components/RainbowHighlight'

export default function Hero() {
  return (
    <section className="flex flex-row justify-center items-center">
      {/*Hero Text Container*/}
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-1/2">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={'#a855f7'}>
              <h1 className="font-typewriter tracking-wider text-8xl md:text-6xl text-center font-bold my-10 uppercase py-7 px-4">
                hi, my name is MJ.
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
        </div>
        <div className="w-3/4">
          <h1 className="font-typewriter tracking-wider text-center text-4xl md:text-4xl font-bold mt-20 mb-40">
            I am a front-end developer that builds effective digital learning
            experiences and products.
          </h1>
        </div>
      </div>
    </section>
  )
}
