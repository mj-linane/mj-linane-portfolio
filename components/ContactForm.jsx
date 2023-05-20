import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mlezndgo");

  if (state.succeeded) {
    return (
      <p className='font-typewriter text-neutral-800 font-semibold'>
        Thanks! I will get back to you soon!
      </p>
    );
  }

  return (
    <form className='form p-4 flex flex-col w-full' onSubmit={handleSubmit}>
      <label
        htmlFor='name'
        className='form-label text-sm text-neutral-800 uppercase mx-4 track-wide'
      >
        Your Name
      </label>
      <input
        type='text'
        className='form-input border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4'
        name='name'
        id='name'
      />
      <label
        htmlFor='email'
        className='form-label text-sm text-neutral-800 uppercase mx-4 mt-4 track-wide'
      >
        Your Email
      </label>
      <input
        type='email'
        className='form-input border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4 '
        name='email'
        id='email'
        typeof='email'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label
        htmlFor='comment'
        className='form-label text-sm text-neutral-800 uppercase mx-4 mt-4 track-wide'
      >
        Your Message
      </label>
      <input
        type='textarea'
        className='form-textarea border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4'
        name='comment'
      />
      <button
        type='submit'
        className='text-sm border-2 border-black bg-purple-500 hover:bg-black text-neutral-50 cursor-pointer h-10 uppercase mx-4 mt-8 py-2 tracking-wider'
        disabled={state.submitting}
      >
        Send Message
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
