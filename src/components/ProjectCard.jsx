import React, { useState } from 'react'
import img from '../assets/portfolio.png'

const ProjectCard = ({ project }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-full w-full"
                    />
                ) : (
                    <img
                        src={img}
                        alt="portfolio"
                        className="object-cover h-full w-full"
                    />
                )}
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.short}</p>

                <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">{project.tech.join(' • ')}</div>
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm"
                    >
                        {open ? 'Close' : 'Check'}
                    </button>
                </div>

                {open && (
                    <div className="mt-4 border-t pt-4 text-sm text-gray-700">
                        <p>{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-orange-600 underline mt-2 inline-block">Live / Repo</a>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
