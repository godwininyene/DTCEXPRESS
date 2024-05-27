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
            <Head title="Welcome" />
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