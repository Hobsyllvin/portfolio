import { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';
import { motion, AnimatePresence } from 'framer-motion';

const MathRenderer = ({ text }) => {
    if (!text) return null;

    // Split text by $ delimiters
    const parts = text.split(/(\$.*?\$)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('$') && part.endsWith('$')) {
                    // Remove $ and render as math
                    const math = part.slice(1, -1);
                    return <InlineMath key={index} math={math} />;
                }
                return <span key={index}>{part}</span>;
            })}
        </>
    );
};

const Lightbox = ({ src, onClose }) => {
    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background-dark/90 backdrop-blur-xl p-4 sm:p-12 cursor-zoom-out"
                >
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="relative max-w-7xl w-full h-full flex items-center justify-center cursor-zoom-out"
                    >
                        <img
                            src={src}
                            alt="Lightbox View"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 sm:-right-12 text-slate-400 hover:text-white transition-colors p-2"
                        >
                            <span className="material-symbols-outlined text-3xl">close</span>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveLightboxImage(null);
            }
        };

        if (activeLightboxImage) {
            window.addEventListener('keydown', handleKeyDown);
        }

        if (selectedProject || activeLightboxImage) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        };
    }, [selectedProject, activeLightboxImage]);
    const projects = [
        {
            title: "Philips Heated Breast Shield",
            desc: "Warming the breast tissue for increased milk flow.",
            img: "public/projects/philips/philips_breastpump.webp",
            tags: ["User-Centric Design", "Soldering"],
            modalTags: ["User-Centric Design", "Soldering", "Creo", "DfSS"],
            overlayDesc: "Key Technical Implementations:\n\n• Functional Prototyping: Led the end-to-end hardware development of multiple functional prototypes. This included component sourcing, custom circuit design for thermal regulation, as well as manual assembly and soldering.\n• CTQ Parameter Identification: Analyzed and defined Critical-to-Quality (CTQ) parameters, such as heat-up time, maximum temperature and power consumption, to ensure the design met both medical and user requirements.\n• User-Centric Validation: Facilitated a user study to evaluate different heating zone configurations. By gathering qualitative feedback on perceived comfort and effectiveness, we narrowed down the most promising thermal configurations.\n• Product Handover: Following the successful validation of the prototypes, I helped prepare the technical documentation to transition the project to the PDLM (Product Development & Lifecycle Management) team for large-scale industrialization and manufacturing.",
            mediaSlots: {
                type: "image",
                images: [
                    "/projects/philips/philips_breastpump.webp"
                ]
            }
        },
        {
            title: "LeVR",
            desc: "Portable Haptic Device for weight simulation in VR.",
            img: "/projects/levr/ma_levr_in.webp",
            tags: ["Mechatronics", "VR", "CANopen"],
            modalTags: ["Mechatronics", "Unity", "CANopen", "I2C", "Fusion360", "3D-printing", "Soldering"],
            overlayDesc: "Conducted in collaboration with Senseglove, this thesis project aimed to simulate the mass of a physical object in Virtual Reality. I designed, built and evaluated LeVR, a portable haptic proxy designed to render these vertical forces experienced when lifting or moving virtual objects. Unlike traditional grounded haptic arms, LeVR provides a free range of motion while maintaining the ability to simulate weight.\n\nKey Technical Implementations:\n• Force Generation Mechanism: Engineered a mechatronic system from scratch that generates vertical force stimuli by precisely accelerating an internal mass. This allows the user to experience weight sensations without external tethers. Utilizing the CANopen protocol and dedicated CAN hardware, the device was able to operate at 500 Hz. Using a capstan drive, the transmission was backlash-free and very robust.\n• VR Environment Development: Developed the virtual environment in which the user can interact with the objects. Furthermore, I built the communication bridge between the physical prototype and the virtual environment, ensuring that the haptic stimuli synchronized with the visual physics of the VR simulation.\n• Evaluation: Test device performance, utilizing step- and frequency-response analyses in the force domain. Furthermore, I evaluated the haptic fidelity using the haptic fidelity framework.\n\nThe project successfully demonstrated a viable pathway for ungrounded weight rendering, providing a hardware-ready solution for enhancing immersion in industrial and consumer VR applications.",
            mediaSlots: {
                type: "image",
                images: [
                    "/projects/levr/levr_poster.jpg",
                    "/projects/levr/ma_levr_anno_in.webp",
                    "/projects/levr/ma_unity_in.webp",
                    "/projects/levr/ma_confusion_in.webp",
                    "/projects/levr/ma_weight_in.webp"
                ]
            }
        },
        {
            title: "Mobile Manipulator Path Planning",
            desc: "Informed RRT* Algorithm Implementation to enable simulated mobile manipulator to navigate complex warehouse environments.",
            img: "/projects/pathplanning/pathplanning.webp",
            tags: ["Python", "Kinematics"],
            modalTags: ["Python", "Kinematics"],
            overlayDesc: "Automated item retrieval and transport for an 'Albert' mobile manipulator in a simulated warehouse environment.\n• Dual-Stage Architecture: Implemented $RRT^*$ for the 7-DOF Franka Panda arm and Informed $RRT^*$ for the mobile base, ensuring asymptotic optimality.\n• Kinematics & Control: Established forward and inverse kinematics using DH convention and integrated PID/PD control.\n• Path Refinement: Applied spline interpolation to algorithm outputs for smoother trajectories.",
            youtubeId: "VViC1GyVnd4",
            mediaSlots: { type: "video", count: 1 }
        },
        {
            title: "MARCOS II",
            desc: "Reassembled the MRI-Compatible Gait Training Robot.",
            img: "/projects/llui/llui_marcos.webp",
            tags: ["Clinical Robotics", "Rapid Prototyping"],
            modalTags: ["Clinical Robotics", "Rapid Prototyping", "3D-printing", "Fusion360"],
            overlayDesc: "During a 3-month residency at the Lake Lucerne Institute, I led the technical implementation of the MARCOS II rehabilitation robot:\n• System Integration: Executed the re-assembly and pneumatic integration of an MRI-compatible stepping robot.\n• Prototyping: Designed and fabricated custom carbon-fiber structural components using Fusion360 and hand-lamination.\n• Hardware Troubleshooting: Repaired legacy xPC Target motherboards via component-level soldering and diagnosed complex network communication failures.\n• Medical Tech Innovation: Engineered an MRI-compatible gaming controller through magnetic-part removal and EMI/RFI shielding.\n• Facility Development: Built and commissioned the institute's CNC machining station (Stepcraft M.1000) from the ground up.",
            externalLink: "https://sms.hest.ethz.ch/research/past-research-projects/mri-compatible-robotics.html",
            pdfLink: "/projects/llui/Internship_LLUI_Report.pdf",
            mediaSlots: {
                type: "image",
                images: [
                    "/projects/llui/llui_carbon.jpg",
                    "/projects/llui/llui_inMRI.jpg",
                    "/projects/llui/llui_marcos.webp",
                    "/projects/llui/llui_cnc.jpg"
                ]
            }
        },
        {
            title: "PMSM Drive System",
            desc: "Developed an automated calibration and testing routine for a sensorless PMSM drive system.",
            img: "/projects/calibration-pmsm/bsc_motors_coupled.webp",
            tags: ["Matlab", "Simulink"],
            modalTags: ["Matlab", "Simulink"],
            overlayDesc: "This project focused on transforming a manual testing environment into an automated experimental framework for a Permanent Magnet Synchronous Motor (PMSM) system. Using an integrated ControlCube with a load inverter via CANopen, I implemented a control architecture designed to streamline testing of the sensorless control algorithms.\n\nKey Technical Implementations:\n• Industrial Communication: Established and validated the CANopen communication protocol between the controller and the drive system for real-time data acquisition and command execution.\n• Hierarchical State Machines: Designed and implemented a three-level Finite State Machine (FSM) in MATLAB/Simulink to manage system safety, execute various test sequences, and automate sensor calibration.\n• Rotor Position Correction: Developed a specialized logic to resolve the $180$ degrees electrical ambiguity inherent in sensorless estimation. By analyzing the differential inductance $L'_d$, the system autonomously detects and compensates for estimation errors during startup.\nThe resulting system helped to reduce commissioning time and human error, providing a reliable, user-controlled software interface for the motor characterization.",
            mediaSlots: {
                type: "image",
                images: [
                    "/projects/calibration-pmsm/bsc_interface.webp",
                    "/projects/calibration-pmsm/bsc_motors_coupled.webp",
                    "/projects/calibration-pmsm/bsc_schematic.webp",
                ]
            }
        },
        {
            title: "Industrial Water Filter",
            desc: "Manufactured parts for industrial water filters during a 2-month pre-studies internship.",
            img: "/projects/industrial-filter/profitlich-0_hr.webp",
            tags: ["CAD", "Manufacturing"],
            modalTags: ["SolidWorks", "Turning", "Milling", "Grinding", "Welding"],
            overlayDesc: "Manufactured parts for industrial water filters during a 2-month pre-studies internship. Learned how to draw basic parts in SolidWorks, and manufactured them using manual and CNC machines. Furthermore, I helped welding the stand, had it powder coated from a supplier, and supported with the assembly of the control cabinets.",
            mediaSlots: {
                type: "image",
                images: [
                    "/projects/industrial-filter/profitlich-1_in.webp",
                    "/projects/industrial-filter/profitlich-2_in.webp",
                    "/projects/industrial-filter/profitlich-3_in.webp"
                ]
            }
        }
    ];

    return (
        <div id="projects" className="mb-24">
            <div className="flex items-center justify-between mb-10">
                <h2 className="font-display text-3xl font-bold text-white tracking-tight">Selected Works</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="group relative flex flex-col bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-all duration-300 min-h-[360px]">
                        <div
                            className="flex flex-col h-full z-0 relative cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-48 overflow-hidden bg-black shrink-0">
                                <img
                                    alt={project.title}
                                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    src={project.img}
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-xs text-slate-400 font-mono leading-relaxed mb-4">{project.desc}</p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-[10px] font-mono px-2 py-0.5 rounded bg-background-dark border border-border-dark text-primary uppercase">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Dialog */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pt-24 block animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    ></div>
                    <div className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-surface-dark border border-border-dark rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
                        <div className="sticky top-0 right-0 z-20 flex justify-end p-4 pointer-events-none">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="pointer-events-auto flex size-8 items-center justify-center rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:bg-secondary hover:text-black hover:border-secondary transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        <div className="px-6 sm:px-10 pb-6 pt-2">
                            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">{selectedProject.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {(selectedProject.modalTags || selectedProject.tags).map((tag, index) => (
                                    <span key={index} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                                        <MathRenderer text={selectedProject.overlayDesc} />
                                    </p>
                                    {(selectedProject.externalLink || selectedProject.pdfLink) && (
                                        <div className="mt-4 flex flex-wrap gap-6">
                                            {selectedProject.externalLink && (
                                                <a
                                                    href={selectedProject.externalLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-mono text-sm"
                                                >
                                                    <span className="material-symbols-outlined text-sm">link</span>
                                                    Further Information on MARCOS
                                                </a>
                                            )}
                                            {selectedProject.pdfLink && (
                                                <a
                                                    href={selectedProject.pdfLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-mono text-sm"
                                                >
                                                    <span className="material-symbols-outlined text-sm">description</span>
                                                    Internship Report (PDF)
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {selectedProject.youtubeId && (
                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-white mb-4">Project Demo</h3>
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border-dark bg-black shadow-lg">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                                                title="Project Demonstration"
                                                className="absolute inset-0 h-full w-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Media &amp; Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                                        {selectedProject.mediaSlots?.images ? (
                                            selectedProject.mediaSlots.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="aspect-video bg-background-dark border border-border-dark rounded-xl overflow-hidden group cursor-zoom-in"
                                                    onClick={() => setActiveLightboxImage(img)}
                                                >
                                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            ))
                                        ) : selectedProject.mediaSlots ? (
                                            Array.from({ length: selectedProject.mediaSlots.count || 0 }).map((_, i) => (
                                                <div key={i} className="aspect-video bg-background-dark border border-border-dark rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-secondary/50 hover:text-secondary transition-colors cursor-pointer group">
                                                    {selectedProject.mediaSlots.type === 'video' ? (
                                                        <>
                                                            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">play_circle</span>
                                                            <span className="text-xs font-mono">Play Video</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">image</span>
                                                            <span className="text-xs font-mono">View Image {i + 1}</span>
                                                        </>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-span-full py-12 flex flex-col items-center justify-center text-slate-500 border border-dashed border-border-dark rounded-xl">
                                                <span className="material-symbols-outlined text-4xl mb-2 opacity-20">inventory_2</span>
                                                <span className="text-sm font-mono opacity-50">No additional media available</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Lightbox
                src={activeLightboxImage}
                onClose={() => setActiveLightboxImage(null)}
            />
        </div>
    );
}
