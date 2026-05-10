import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { image } from 'framer-motion/client'
import img1 from '../assets/portfolio.png'
import img2 from '../assets/divine.png'
import img3 from '../assets/warranty.png'


const Projects = () => {
    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const filter = params.get('filter')?.toLowerCase() || ''

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            short: 'A responsive portfolio site built with React and Tailwind.',
            description: 'Complete portfolio with sections for skills, projects, and contact. Built using React, React Router and TailwindCSS.',
            tech: ['React', 'Tailwind', 'Vite'],
            tags: ['web', 'react'],
            image: img1,
            link: 'https://portfolio-sand-five-98.vercel.app/'
        },
        {
            id: 2,
            title: 'E-Commerce Mock',
            short: 'A small e-commerce UI prototype.',
            description: 'Product listing, cart mock, and responsive layouts demonstrating UI/UX skills.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            tags: ['web', 'javascript'],
            image: img2,
            link: 'https://www.aviyanadivine.com'
        },
        {
            id: 3,
            title: 'Warranty Vault Management System',
            short: 'An admin dashboard application.',
            description:
                'CRUD operations, state management , and RestAPIs Integrated with chatbot assistent implement including payment integration.',
            tech: ['React', 'Hooks'],
            image: img3,
            tags: ['react'],
            link: 'https://www.warrantyvault.in'
        }
    ]

    const filtered = filter ? projects.filter(p => p.tags.includes(filter) || p.tech.join(' ').toLowerCase().includes(filter)) : projects

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold underline text-center mb-8">My Projects</h2>

                {filter && (
                    <p className="text-center text-sm text-gray-600 mb-6">Showing projects for: <strong className="text-orange-600">{filter}</strong></p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
