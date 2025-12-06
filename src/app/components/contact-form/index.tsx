'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      name: '',
      phone: '',
      message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    setError('')

    // Проверка заполнения полей
    if (!formData.name || !formData.phone) {
      setError('Пожалуйста, заполните обязательные поля (Имя и Телефон)')
      setLoader(false)
      return
    }

    try {
      // Замените на ваш токен бота и ID чата
      const botToken = '8111157573:AAHMzd53UZLJ7HWiHopqYxJpGf5MkFHYr-A'
      const chatId = '-1002531981899'
      
      const text = `Новая заявка:\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message || 'Не указано'}`

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения')
      }

      reset()
      setSubmitted(true)
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.')
      console.error('Ошибка отправки формы:', err)
    } finally {
      setLoader(false)
    }
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl  before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='font-medium w-full'>
                Заполните форму и мы решим вашу проблему!
              </h2>
            </div>
            {submitted ? (
              <div className='flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/20 dark:bg-white/5'>
                <div className='flex'>
                  <Icon
                    icon='ix:success-filled'
                    width='30'
                    height='30'
                    style={{ color: '#79D45E' }}
                  />
                  <h5 className='text-green dark:text-green'>
                    Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                  </h5>
                </div>

                <Link
                  href='/'
                  className='group w-fit text-black font-medium bg-transparent dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black'>
                  <span className='group-hover:translate-x-9 group-hover:dark:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out'>
                    На главную
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-[110px] transition-all duration-200 ease-in-out group-hover:rotate-45'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='white'
                      className=' transition-colors duration-200 ease-in-out fill-black'
                    />
                    <path
                      d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                      stroke='#1B1D1E'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className=' transition-colors duration-200 ease-in-out stroke-white'
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8'>
                {error && (
                  <div className='text-red-500 dark:text-red-400 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg'>
                    {error}
                  </div>
                )}
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='name'>Имя <span className='text-red-500'>*</span></label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Введите имя'
                      required
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='phone'>Номер телефона <span className='text-red-500'>*</span></label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='phone'
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Введите номер телефона'
                      required
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor='message'>Сообщение</label>
                  <textarea
                    className='w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20
                                        focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Задайте вопрос или опишите проблему'
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <button
                      type='submit'
                      className='cursor-pointer group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out  hover:bg-transparent border hover:text-dark_black border-dark_black'>
                      <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-10'>
                        Отправить
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-27 group-hover:rotate-45'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='white'
                          className='fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black '
                        />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button 
                      type='button'
                      disabled
                      className='bg-grey item-center flex gap-2 py-3 px-7 rounded-sm'>
                      <div
                        className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Загрузка...</span>
                      </div>{' '}
                      Отправка
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm