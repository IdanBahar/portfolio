import type { Route } from './+types/index'
import { Form } from 'react-router'

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  const errors: Record<string, string> = {}

  if (!name) errors.name = 'Name is required'
  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid Email format'
  }
  if (!subject) errors.subject = 'Subject is required'
  if (!message) errors.message = 'Message is required'

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  const data = {
    name,
    email,
    subject,
    message,
  }

  return { message: 'Form submitted successfully!', data }
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {}

  return (
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 '>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        Contact <span className='text-green-400'>Me</span> ✉️
      </h2>

      {actionData?.message ? (
        <p className='mb-6 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md'>
          {actionData.message}
        </p>
      ) : null}

      <Form method='post' className='space-y-6'>
        <div>
          <label htmlFor='name' className='block text-sm font-md text-gray-300'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full mt-1 px-4 py-2 border border-green-400 outline-green-800 rounded-lg text-gray-100'
          />
          {errors.name && (
            <p className='mt-2 text-sm text-red-400'>{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-md text-gray-300'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full mt-1 px-4 py-2 border border-green-400 outline-green-800 rounded-lg text-gray-100'
          />
          {errors.email && (
            <p className='mt-2 text-sm text-red-400'>{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-md text-gray-300'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='w-full mt-1 px-4 py-2 border border-green-400 outline-green-800 rounded-lg text-gray-100'
          />
          {errors.subject && (
            <p className='mt-2 text-sm text-red-400'>{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-md text-gray-300'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full mt-1 px-4 py-2 border border-green-400 outline-green-800 rounded-lg text-gray-100'
          />
          {errors.message && (
            <p className='mt-2 text-sm text-red-400'>{errors.message}</p>
          )}
        </div>
        <button className='w-full bg-green-500 text-white py-2 rounded-lg cursor-pointer hover:bg-green-600'>
          Send Message
        </button>
      </Form>
    </div>
  )
}

export default ContactPage
