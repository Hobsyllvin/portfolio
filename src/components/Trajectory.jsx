import { useState } from "react";

export default function Trajectory() {
    const [activeTab, setActiveTab] = useState("work");

    return (
        <div className="mb-24 relative">
            <div className="flex flex-col mb-12 text-center">
                <h2 className="font-display text-3xl font-bold text-white tracking-tight">Trajectory</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">A detailed timeline of professional and academic milestones.</p>
                <div className="tabs-nav flex justify-center mt-8 border-b border-border-dark">
                    <button
                        type="button"
                        onClick={() => setActiveTab("work")}
                        className={`px-8 py-3 text-sm font-bold tracking-wide transition-colors border-b-2 ${activeTab === 'work' ? 'text-white border-secondary' : 'text-slate-400 border-transparent hover:text-white hover:border-slate-700'}`}
                    >
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">work</span> WORK EXPERIENCE
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("edu")}
                        className={`px-8 py-3 text-sm font-bold tracking-wide transition-colors border-b-2 ${activeTab === 'edu' ? 'text-white border-secondary' : 'text-slate-400 border-transparent hover:text-white hover:border-slate-700'}`}
                    >
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">school</span> EDUCATION
                        </span>
                    </button>
                </div>
            </div>

            {activeTab === "work" && (
                <div className="relative max-w-4xl mx-auto px-4 sm:px-0 block animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="absolute left-8 sm:left-1/2 top-0 h-full w-px bg-border-dark transform sm:-translate-x-1/2 z-0"></div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right pl-20 sm:pl-0 mb-4 sm:mb-0 relative order-2 sm:order-1">
                                <span className="block text-secondary text-sm font-bold tracking-wider mb-1">MAY 2025 — PRESENT</span>
                                <h3 className="font-display text-xl font-bold text-white">Product Engineer and Prototyping Owner</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Philips, Eindhoven, NL</p>
                                <p className="text-slate-500 text-sm mt-3 leading-relaxed hidden sm:block">Developing prototypes and patent ideas for Philips Avent products.</p>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-secondary group-hover:text-secondary transition-all shadow-lg group-hover:shadow-secondary/20 bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">precision_manufacturing</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 pl-20 order-3">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-secondary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Impact</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-emerald-500 shrink-0">►</span>
                                            <span>Set up development lab for faster prototyping and testing.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 pl-20 sm:pl-0 mb-4 sm:mb-0 order-3 sm:order-1">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-primary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Technical Stack</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-primary shrink-0">►</span>
                                            <span>CAD modelling, 3D-printing, Prototyping, Unity.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-primary group-hover:text-primary transition-all shadow-lg group-hover:shadow-primary/20 bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">front_hand</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-left pl-20 order-2 sm:order-3">
                                <span className="block text-primary text-sm font-bold tracking-wider mb-1">JUN 2024 — FEB 2025</span>
                                <h3 className="font-display text-xl font-bold text-white">MSc. Thesis Intern</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Senseglove, Delft, NL</p>
                                <p className="text-slate-500 text-sm mt-3 leading-relaxed hidden sm:block">Built prototype for weight rendering in VR.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right pl-20 sm:pl-0 mb-4 sm:mb-0 relative order-2 sm:order-1">
                                <span className="block text-slate-400 text-sm font-bold tracking-wider mb-1">SEP 2023 — NOV 2023</span>
                                <h3 className="font-display text-xl font-bold text-white">Rehab R&amp;D Intern</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Lake Lucerne Institute, Vitznau, CH</p>
                                <p className="text-slate-500 text-sm mt-3 leading-relaxed hidden sm:block">Reassembled MRI-compatible stepping robot MARCOS II.</p>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-white group-hover:text-white transition-all shadow-lg bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">health_metrics</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 pl-20 order-3">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-secondary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Activities</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-slate-500 shrink-0">►</span>
                                            <span>Assembled CNC-Machine, 3D-printing, custom carbon parts.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 pl-20 sm:pl-0 mb-4 sm:mb-0 order-3 sm:order-1">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-primary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Key Tasks</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-primary shrink-0">►</span>
                                            <span>Benchmarking analyses for vehicle projects; planned team-building workshops.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-primary group-hover:text-primary transition-all shadow-lg bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">directions_car</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-left pl-20 order-2 sm:order-3">
                                <span className="block text-primary text-sm font-bold tracking-wider mb-1">OCT 2021 — APR 2022</span>
                                <h3 className="font-display text-xl font-bold text-white">Product Benchmarking Intern</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Audi AG, Ingolstadt, DE</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right pl-20 sm:pl-0 mb-4 sm:mb-0 relative order-2 sm:order-1">
                                <span className="block text-slate-400 text-sm font-bold tracking-wider mb-1">DEC 2019 — MAR 2021</span>
                                <h3 className="font-display text-xl font-bold text-white">Auxiliary Scientist</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Leibniz University, Hannover, DE</p>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-white group-hover:text-white transition-all shadow-lg bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">terminal</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 pl-20 order-3">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-secondary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Development</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-slate-500 shrink-0">►</span>
                                            <span>Built models in MATLAB SIMULINK; translated scripts to C++.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 pl-20 sm:pl-0 mb-4 sm:mb-0 order-3 sm:order-1">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-primary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Skills</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-primary shrink-0">►</span>
                                            <span>Turning, grinding, milling, welding.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-primary group-hover:text-primary transition-all shadow-lg bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">factory</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-left pl-20 order-2 sm:order-3">
                                <span className="block text-primary text-sm font-bold tracking-wider mb-1">FEB 2018 — APR 2018</span>
                                <h3 className="font-display text-xl font-bold text-white">Basic Internship</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Filter PROFItlich Maschinenbau GmbH</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-16 sm:mb-24 group">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-right pl-20 sm:pl-0 mb-4 sm:mb-0 relative order-2 sm:order-1">
                                <span className="block text-slate-400 text-sm font-bold tracking-wider mb-1">APR 2017 — DEC 2017</span>
                                <h3 className="font-display text-xl font-bold text-white">Commercial Assistant</h3>
                                <p className="text-slate-400 text-sm mt-1 font-medium">ZF Friedrichshafen AG, Eitorf, DE</p>
                            </div>
                            <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 flex items-center justify-center order-1 sm:order-2">
                                <div className="flex size-16 items-center justify-center rounded-xl bg-surface-dark border-2 border-border-dark text-slate-400 group-hover:border-white group-hover:text-white transition-all shadow-lg bg-grid-pattern">
                                    <span className="material-symbols-outlined text-[32px]">inventory_2</span>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-12 pl-20 order-3">
                                <div className="relative rounded-lg bg-surface-dark border border-border-dark p-5 hover:border-secondary/40 transition-colors group-hover:bg-surface-dark/80">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 border-b border-border-dark pb-2">Systems</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-slate-300 font-mono">
                                            <span className="text-slate-500 shrink-0">►</span>
                                            <span>Quality management (Excel, SAP); SAP system conversion.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex justify-center">
                        <div className="size-4 rounded-full bg-surface-dark border-2 border-border-dark"></div>
                    </div>
                </div>
            )}

            {activeTab === "edu" && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 block">
                    <div className="group relative flex items-start gap-6 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-all">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-background-dark border border-border-dark text-primary">
                            <span className="material-symbols-outlined text-[28px]">school</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-white">MSc. Robotics, cum laude</h3>
                                    <p className="text-slate-400 text-sm font-medium">Delft University of Technology, NL</p>
                                </div>
                                <span className="text-primary font-mono text-xs font-bold px-3 py-1 bg-primary/10 rounded-full border border-primary/20 self-start sm:self-center">
                                    SEP 2022 — FEB 2025
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">Machine Learning, Programming, Human-Robot Interaction.</p>
                        </div>
                    </div>

                    <div className="group relative flex items-start gap-6 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-secondary/50 transition-all">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-background-dark border border-border-dark text-secondary">
                            <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-white">BSc. Mechatronics</h3>
                                    <p className="text-slate-400 text-sm font-medium">Leibniz University Hannover, DE</p>
                                </div>
                                <span className="text-secondary font-mono text-xs font-bold px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20 self-start sm:self-center">
                                    SEP 2018 — OCT 2021
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">Thesis: Automated experimental investigation of encoderless controlled drive system.</p>
                        </div>
                    </div>

                    <div className="group relative flex items-start gap-6 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-slate-500 transition-all">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-background-dark border border-border-dark text-slate-400">
                            <span className="material-symbols-outlined text-[28px]">history_edu</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-white">High School</h3>
                                    <p className="text-slate-400 text-sm font-medium">Franziskusgymnasium Nonnenwerth, Remagen, DE</p>
                                </div>
                                <span className="text-slate-400 font-mono text-xs font-bold px-3 py-1 bg-slate-800 rounded-full border border-border-dark self-start sm:self-center">
                                    SEP 2008 — MAR 2017
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
