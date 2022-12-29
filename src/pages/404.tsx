import * as React from "react"
import { Link, PageProps } from "gatsby"
import { Error404Image } from "../components/common/styled"
import { Helmet } from 'react-helmet';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div>

      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>Seems you are lost!</title>
      </Helmet>

      <section className='w-full h-full md:p-10 bg-slate-100 text-center'>

        <div className='container md:flex'>

          <div>
            <Error404Image />
          </div>

          <div className="md:justify-start mx-auto md:py-[12rem]">

            <div className='text-3xl p-5 text-slate-800'>Seems you are lost! No worries.</div>

            <div className='text-slate-600'>
              Check back at the URL provided or&nbsp;
              <Link to={'/'} className='bg-yellow-200 px-2 py-1 text-slate-600 rounded-md hover:bg-yellow-300'>Go Home</Link>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default NotFoundPage
