import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout';
import Hero from '@/Components/Hero';
import WhyUs from '@/Components/WhyUs';
import AboutSection from '@/Components/AboutSection';
import Extra from '@/Components/Extra';
import TimeTable from '@/Components/TimeTable';
import Services from '@/Components/Services';
import Overview from '@/Components/Overview';
import Brief from '@/Components/Brief';
import CTA from '@/Components/CTA';
import Praisal from '@/Components/Praisal';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <BaseLayout>
             <Head title="CD & T Express">
                <meta name="description" content="CD & T Express logistics company" />
                <meta name="keywords" content="CD & T Express logistics company, International logistics services,  logistics solution, courier delivery, sea freight, Air Freight, Land Freight" />
            </Head>
            <Hero />
            <WhyUs />
            <AboutSection />
            <Extra />
            <TimeTable />
            <Services />
            <Overview />
            <Brief />
            <CTA />
            <Praisal />
        </BaseLayout>
    );
}