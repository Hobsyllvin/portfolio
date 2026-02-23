export default function Skills() {
    const skills = [
        { icon: "smart_toy", title: "Robotics & Autonomous Systems", details: "Python, C++, ROS, Bash, Computer Vision, Deep Learning" },
        { icon: "handyman", title: "Prototyping & Physical Computing", details: "Rapid Prototyping, Manual Machining, Soldering, 3D-Printing, Silicone Casting, Microcontrollers" },
        { icon: "settings_input_component", title: "Parametric Design", details: "CAD Inventor, Creo, Fusion360" },
        { icon: "timeline", title: "Control Theory & Simulation", details: "MATLAB, Simulink" },
        { icon: "view_in_ar", title: "VR & Haptics", details: "Unity" },
        { icon: "factory", title: "Typesetting and Design", details: "MS Office, LaTeX, Logic Pro X" },
    ];

    return (
        <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-border-dark pb-6">
                <div>
                    <h2 className="font-display text-3xl font-bold text-white tracking-tight">Skills &amp; Expertise</h2>
                    <p className="text-slate-400 mt-2 max-w-xl">Comprehensive skillset to turn ideas into working prototypes</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="group flex flex-col gap-3 rounded-xl border border-border-dark bg-surface-dark hover:border-secondary/30 transition-all p-5">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="size-10 rounded-lg bg-background-dark border border-border-dark flex items-center justify-center text-white group-hover:text-secondary transition-colors shrink-0">
                                <span className="material-symbols-outlined text-[24px]">{skill.icon}</span>
                            </div>
                            <h3 className="font-display text-lg font-bold text-white">{skill.title}</h3>
                        </div>
                        <p className="font-mono text-xs text-text-muted leading-relaxed">
                            {skill.details}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
