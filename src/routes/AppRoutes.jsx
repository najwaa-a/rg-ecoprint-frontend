import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout'
import Loader from '@/components/common/Loader'
import { ROUTES } from '@/constants/routes'

// Code splitting: tiap halaman dimuat hanya saat dibuka
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
// const Services = lazy(() => import('@/pages/Services'))
// const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
// const Portfolio = lazy(() => import('@/pages/Portfolio'))
// const PortfolioDetail = lazy(() => import('@/pages/PortfolioDetail'))
// const Blog = lazy(() => import('@/pages/Blog'))
// const BlogDetail = lazy(() => import('@/pages/BlogDetail'))
// const Contact = lazy(() => import('@/pages/Contact'))
// const NotFound = lazy(() => import('@/pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          {/* <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetail />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
          <Route path={ROUTES.PORTFOLIO_DETAIL} element={<PortfolioDetail />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetail />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}