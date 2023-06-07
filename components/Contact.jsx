import { RoughNotationGroup } from 'react-rough-notation'

import ContactForm from './ContactForm'
import RainbowHighlight from './RainbowHighlight'

export default function Contact() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={'#a855f7'}>
            <h1 className="font-typewriter font-bold text-center dark:text-neutral-50  md:text-9xl md:text-left z-10 tracking-wider py-20">
              contact me.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-900 -mt-4 py-40">
        {/*Form Container*/}
        <div className="border-4 border-black bg-neutral-50 box-shadow-md-black p-4 md:p-10 lg:p-20 max-w-6xl mx-auto">
          {/*Form*/}
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
            <div className="mx-4 flex flex-row items-center space-x-6">
              <h1 className="font-typewriter text-neutral-800 font-semibold text-4xl">
                Let&apos;s talk about what you are working on.
              </h1>
            </div>
            <div className="flex flex-row items-center space-x-6 border-4 border-black py-4 px-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
