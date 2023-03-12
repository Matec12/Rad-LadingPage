import { Button } from '@/components/ui/Buttons';
import { Field, Form, ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      yourName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object().shape({
      yourName: Yup.string().required('Name is Required'),
      phone: Yup.string().required('Phone is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      message: Yup.string().required('Message is Required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    }
  });

  const { handleSubmit, isSubmitting } = formik;

  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <div className='grid gap-4 lg:grid-cols-2'>
            <div className='mb-2'>
              <label htmlFor='FirstName'>
                Your Name <span className='text-red-500'>*</span>
              </label>
              <Field
                className='my-2 w-full rounded-[4px] border-2 p-4 text-primary focus:border-primary focus:outline-0'
                name='yourName'
                type='text'
                placeholder='Adedoja Adekola'
              />
              <div className='text-sm text-red-600'>
                <ErrorMessage name='yourName' />
              </div>
            </div>

            <div className='mb-2'>
              <label htmlFor='Email'>
                Email <span className='text-red-500'>*</span>
              </label>
              <Field
                className='my-2 w-full rounded-[4px] border-2 p-4 text-primary focus:border-primary focus:outline-0'
                name='email'
                type='email'
                placeholder='test@gmail.com'
              />
              <div className='text-sm text-red-600'>
                <ErrorMessage name='email' />
              </div>
            </div>
          </div>

          <div className='mb-2'>
            <label htmlFor='Phone Number'>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <Field
              className='my-2 w-full rounded-[4px] border-2 p-4 text-primary focus:border-primary focus:outline-0'
              name='phone'
              type='text'
              placeholder='09074448588'
            />
            <div className='text-sm text-red-600'>
              <ErrorMessage name='phone' />
            </div>
          </div>

          <div className='mb-2'>
            <label htmlFor='message'>
              Message <span className='text-red-500'>*</span>
            </label>
            <Field
              className='my-2 w-full resize-none rounded-[4px] border-2 p-4 text-primary focus:border-primary focus:outline-0'
              name='message'
              as='textarea'
              rows={6}
              placeholder='Message...'
            />
            <div className='text-sm text-red-600'>
              <ErrorMessage name='message' />
            </div>
          </div>

          <div className='mt-8 mb-4 md:w-1/3'>
            <Button className='w-full'>
              <a className=''>
                {isSubmitting ? (
                  <i
                    className='fas fa-circle-notch fa-spin'
                    aria-hidden='true'
                  ></i>
                ) : (
                  'Send Message'
                )}
              </a>
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ContactForm;
