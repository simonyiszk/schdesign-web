import React from 'react';
import AboutSection from '../components/AboutSection';
import CourseSection from '../components/CourseSection';
import ContactSection from '../components/ContactSection';
import Layout from '../components/Layout';
import CloudVR from '../components/CloudVR';
import Arvrdg from '../components/Arvrdg';
import Carbon from '../components/Carbon';

const IndexPage = () => (
  <Layout>
    {/* <AboutSection /> */}
    {/* <CourseSection /> */}
    <CloudVR />
    <Arvrdg />
    <Carbon />
  </Layout>
);

export default IndexPage;
