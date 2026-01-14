import { 
  Calendar, 
  Video, 
  Bot, 
  FileText, 
  Bell, 
  Shield,
  Clock,
  Users
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Bot Attendance",
    description: "Our intelligent bot joins meetings on your behalf, ensuring you never miss attendance even during conflicts.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Sync with Google Calendar to automatically detect and schedule bot attendance for all your meetings.",
  },
  {
    icon: Video,
    title: "Full Recordings",
    description: "Every meeting is recorded in HD quality. Download or stream anytime from your personal dashboard.",
  },
  {
    icon: FileText,
    title: "AI Summaries",
    description: "Get intelligent meeting summaries with key points, decisions, and action items extracted automatically.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive instant alerts when meetings end with quick access to recordings and summaries.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade encryption for all recordings. Your data stays private and fully protected.",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reclaim hours of your week by attending meetings asynchronously without compromising on presence.",
  },
  {
    icon: Users,
    title: "Multi-Platform",
    description: "Works seamlessly with Google Meet, Zoom, and Microsoft Teams. One solution for all platforms.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text gradient-primary">
              Automate Attendance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed for students, remote workers, and busy professionals 
            who need to be in multiple places at once.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl glass-card hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
